import Player from '../../lib/org/bukkit/entity/Player.js'
import BlockBreakEvent from '../../lib/org/bukkit/event/block/BlockBreakEvent.js'
import BlockPistonExtendEvent from '../../lib/org/bukkit/event/block/BlockPistonExtendEvent.js'
import BlockPistonRetractEvent from '../../lib/org/bukkit/event/block/BlockPistonRetractEvent.js'
import BlockPlaceEvent from '../../lib/org/bukkit/event/block/BlockPlaceEvent.js'
import EntityExplodeEvent from '../../lib/org/bukkit/event/entity/EntityExplodeEvent.js'
import ItemStack from '../../lib/org/bukkit/inventory/ItemStack.js'
import Location from '../../lib/org/bukkit/Location.js'
import { Subscribe } from '../services/EventListener.js'
import YAMLDatabase from '../services/YAMLDatabase.js'
import Module from '../types/Module.js'
import { deserializeLocation, serializeLocation } from '../util.js'

type AspectMetadata = any

export interface Aspect {
  serializeItem: (item: ItemStack, player: Player) => AspectMetadata | null | Error;
  onPlace?: (data: AspectMetadata, event: BlockPlaceEvent) => void;
  createDrop?: (data: AspectMetadata, player?: Player) => ItemStack;
}

export interface AspectData {
  aspectId: string;
  data: AspectMetadata;
}

interface AspectDB extends YAMLDatabase {
  data: { [key: string]: AspectData };
}

@Subscribe
export default class BlockAspects extends Module {
  get name() { return 'Block Aspects' }

  db: AspectDB

  aspects: Record<string, Aspect> = {}

  onEnable() {
    this.db = this.plugin.dbFactory.open('block-aspects')
  }

  onBlockPlace(listener: any, event: BlockPlaceEvent) {
    const item = event.getItemInHand()
    const player = event.getPlayer()
    for (const [aspectId, aspect] of Object.entries(this.aspects)) {
      const aspectData = aspect.serializeItem(item, player)
      if (aspectData instanceof Error) {
        event.setCancelled(true)
        this.tellPlayer(player, aspectData.message)
      } else if (aspectData) {
        const where = event.getBlockPlaced().getLocation()
        this.db.data[serializeLocation(where)] = {
          aspectId,
          data: aspectData,
        }
        this.db.save()
        if (aspect.onPlace) aspect.onPlace(aspectData, event)
        break
      }
    }
  }

  onBlockBreak(listener: any, event: BlockBreakEvent) {
    const block = event.getBlock()
    const where = block.getLocation()
    const whereStr = serializeLocation(where)
    const aspectData = this.db.data[whereStr]
    if (aspectData) {
      const { aspectId } = aspectData
      delete this.db.data[whereStr]
      this.db.save()
      const aspect = this.aspects[aspectId]
      if (aspect.createDrop) {
        const drop = aspect.createDrop(aspectData.data, event.getPlayer())
        if (drop) {
          event.setDropItems(false)
          event.setExpToDrop(0)
          where.getWorld().dropItemNaturally(where, drop)
        }
      }
    }
  }

  onBlockPistonRetract(listener: any, event: BlockPistonRetractEvent) {
    this.onBlockPistonRetractOrExtend(event)
  }

  onBlockPistonExtend(listener: any, event: BlockPistonExtendEvent) {
    this.onBlockPistonRetractOrExtend(event)
  }

  onBlockPistonRetractOrExtend(event: BlockPistonRetractEvent | BlockPistonExtendEvent) {
    const newData: AspectDB['data'] = {}
    for (const block of Array.from(event.getBlocks())) {
      const where = block.getLocation()
      const aspectData = this.plugin.blockAspects.getBlockAspect(where)
      if (!aspectData) continue
      const newWhere = block.getRelative(event.getDirection()).getLocation()
      const whereStr = serializeLocation(where)
      const newWhereStr = serializeLocation(newWhere)
      newData[newWhereStr] = this.db.data[whereStr]
      delete this.db.data[whereStr]
    }
    if (Object.keys(newData).length > 0) {
      Object.assign(this.db.data, newData)
      this.db.save()
    }
  }

  onEntityExplode(listener: any, event: EntityExplodeEvent) {
    const blocks = Array.from(event.blockList())
    let stopYield = false
    for (const block of blocks) {
      const where = block.getLocation()
      const whereStr = serializeLocation(where)
      const aspectData = this.db.data[whereStr]
      if (aspectData) {
        const aspect = this.aspects[aspectData.aspectId]
        if (aspect) {
          const drop = aspect.createDrop(aspectData.data)
          if (drop) where.getWorld().dropItemNaturally(where, drop)
          stopYield = true
        }
        delete this.db.data[whereStr]
        this.db.save()
      }
    }
    if (stopYield) event.setYield(0)
  }

  // API
  getBlockAspect(where: Location) {
    const blockWhere = where.getBlock().getLocation()
    return this.db.data[serializeLocation(blockWhere)] || null
  }

  getMap() {
    const map: Map<Location, AspectData> = new Map()
    for (const [whereStr, aspectData] of Object.entries(this.db.data)) {
      const where = deserializeLocation(whereStr, this.plugin.server)
      map.set(where, aspectData)
    }
    return map
  }

  filterMapById(aspectId: string) {
    const filteredMap: Map<Location, AspectData> = new Map()
    for (const [whereStr, aspectData] of Object.entries(this.db.data)) {
      if (aspectData.aspectId === aspectId) {
        const where = deserializeLocation(whereStr, this.plugin.server)
        filteredMap.set(where, aspectData)
      }
    }
    return filteredMap
  }

  addAspect(aspectId: string, aspect: Aspect) {
    this.aspects[aspectId] = aspect
  }

  removeAspect(aspectId: string) {
    delete this.aspects[aspectId]
  }
}
