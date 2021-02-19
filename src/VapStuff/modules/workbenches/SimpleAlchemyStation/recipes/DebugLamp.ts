import ItemBuilder from '../../../../../lib/com/smc/utils/ItemBuilder.js'
import Player from '../../../../../lib/org/bukkit/entity/Player.js'
import BlockBreakEvent from '../../../../../lib/org/bukkit/event/block/BlockBreakEvent.js'
import BlockRedstoneEvent from '../../../../../lib/org/bukkit/event/block/BlockRedstoneEvent.js'
import GameMode from '../../../../../lib/org/bukkit/GameMode.js'
import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import { Subscribe } from '../../../../services/EventListener.js'
import Module from '../../../../types/Module.js'
import { colorText } from '../../../../util.js'

interface DebugInfo {
  owner: UUID;
  type: string;
  lastEnabled: number;
}

@Subscribe
export default class DebugLamp extends Module {
  ASPECT_ID = 'debugLamp'

  DEBUG_NAME = colorText('&bDebug')

  onEnable() {
    this.plugin.blockAspects.addAspect(this.ASPECT_ID, {
      serializeItem: (item: ItemStack, player: Player): DebugInfo => {
        if (!item.getItemMeta().getDisplayName().startsWith(this.DEBUG_NAME)) return null
        const uuid = player.getUniqueId().toString()
        return {
          owner: uuid,
          type: item.getType().name().replace(/ /g, '_').toUpperCase(),
          lastEnabled: 0,
        }
      },
      createDrop: (data: DebugInfo, player: Player) => {
        if (player && player.getGameMode() === GameMode.CREATIVE) return null
        return new ItemBuilder(Material[data.type])
          .setDisplayName(`${this.DEBUG_NAME} ${this.capitalizeWords(data.type.replace(/_/g, ' ').toLowerCase())}`)
          .build()
      },
    })
  }

  onDisable() {
    this.plugin.blockAspects.removeAspect(this.ASPECT_ID)
  }

  onBlockRedstone(listener: any, event: BlockRedstoneEvent) {
    const aspect = this.plugin.blockAspects.getBlockAspect(event.getBlock().getLocation())
    if (!aspect || aspect.aspectId !== this.ASPECT_ID) return
    const world = event.getBlock().getWorld()
    const debug = aspect.data as DebugInfo
    const current = event.getNewCurrent()
    const now = world.getFullTime()
    if (current > 0) {
      debug.lastEnabled = now
    } else if (current === 0 && debug.lastEnabled > 0) {
      const player = this.plugin.getPlayer(debug.owner)
      if (player) {
        const delta = now - debug.lastEnabled
        this.tellPlayer(player, `Debug &f${
          this.capitalizeWords(debug.type.replace(/_/g, ' ').toLowerCase())
        }&r: &b${now - debug.lastEnabled} &rtick${delta === 1 ? '' : 's'}`)
      }
      debug.lastEnabled = 0
    }
  }

  onBlockBreak(listener: any, event: BlockBreakEvent) {
    const where = event.getBlock().getLocation()
    if (
      where.getBlockX() === 191
      && where.getBlockY() === 64
      && where.getBlockZ() === 464
    ) {
      const things = [
        where.clone().add(1, 0, 1),
        where.clone().add(0, 0, 1),
      ].map(thing => where.getWorld().getBlockAt(thing).getType())
      console.log(things.join(', '))
    }
  }
}
