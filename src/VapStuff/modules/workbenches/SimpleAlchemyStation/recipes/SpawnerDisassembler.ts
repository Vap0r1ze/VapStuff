import CreatureSpawner from '../../../../../lib/org/bukkit/block/CreatureSpawner.js'
import Player from '../../../../../lib/org/bukkit/entity/Player.js'
import Action from '../../../../../lib/org/bukkit/event/block/Action.js'
import BlockBreakEvent from '../../../../../lib/org/bukkit/event/block/BlockBreakEvent.js'
import BlockPlaceEvent from '../../../../../lib/org/bukkit/event/block/BlockPlaceEvent.js'
import EntityDamageByEntityEvent from '../../../../../lib/org/bukkit/event/entity/EntityDamageByEntityEvent.js'
import PlayerInteractEvent from '../../../../../lib/org/bukkit/event/player/PlayerInteractEvent.js'
import GameMode from '../../../../../lib/org/bukkit/GameMode.js'
import EquipmentSlot from '../../../../../lib/org/bukkit/inventory/EquipmentSlot.js'
import ItemFlag from '../../../../../lib/org/bukkit/inventory/ItemFlag.js'
import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import PlayerInventory from '../../../../../lib/org/bukkit/inventory/PlayerInventory.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import Sound from '../../../../../lib/org/bukkit/Sound.js'
import { Subscribe } from '../../../../services/EventListener.js'
import Module from '../../../../types/Module.js'
import { colorText } from '../../../../util.js'
import { ItemEnv } from '../../../ExtraRecipes.js'

@Subscribe
export default class SpawnerDisassembler extends Module {
  get name() { return 'Spawner Disassembler' }

  readonly PICK_NAME = this.colorText('&#2CDA9DSpawner Disassembler')

  readonly INFO =
  '&7Once activated, this pickaxe can\n'
    + '&7carefully disassemble\n'
    + '&7a mob spawner without destroying it,\n'
    + '&7allowing you to collect it.\n'
    + '&7However, it only works &bonce&7,\n'
    + '&7so choose carefully.'

  readonly CANNOT_USE = 'You cannot use this pickaxe normally.'

  readonly LEARN_MORE = '&8(Hover over this item to learn more)'

  readonly SPAWNER_TEMPLATE = (mobName: string) => this.colorText(`&b${mobName} Spawner`)

  readonly SPAWNER_TEST = new RegExp(
    `^${this.SPAWNER_TEMPLATE('([\\w ]+)')}$`,
  )

  readonly LEVEL_COST = 85

  readonly WORKBENCH_ID = 'simpleAlch'

  readonly ID = 'spawnerDisassembler'

  // Hooks
  onEnable() {
    this.plugin.extraRecipes.addRecipe(this.WORKBENCH_ID, this.ID, {
      name: 'Spawner Disassembler',
      ingredients: [
        [Material.PRISMARINE_CRYSTALS, 10],
        [Material.ENDER_EYE, 6],
        [Material.GHAST_TEAR, 2],
        [Material.NETHER_STAR, 1],
      ],
      advancedIngredients: [
        [
          Material.NETHERITE_PICKAXE,
          item => {
            const isNotBroken = item.getDurability() === 0
            const meta = item.getItemMeta()
            const isNotDisassembler = meta.getDisplayName() !== this.PICK_NAME
            return isNotBroken && isNotDisassembler
          },
        ],
      ],
      createResult: (env: ItemEnv) => {
        const result = new ItemStack(Material.NETHERITE_PICKAXE)
        const meta = result.getItemMeta()
        meta.setDisplayName(this.PICK_NAME)
        switch (env) {
          case ItemEnv.GUIDE_LIST:
          case ItemEnv.GUIDE_RESULT: {
            meta.setLore(colorText(this.INFO).split('\n'))
            break
          }
          case ItemEnv.DEFAULT:
          default: {
            meta.setLore(
              this.colorText(
                `${'&7Status: &8Not Activated\n'
                  + `&7Level Cost: &a${this.LEVEL_COST}\n\n`}${
                  this.INFO
                }\n\n&8&oRight click to activate`,
              ).split('\n'),
            )
            break
          }
        }
        meta.addItemFlags([ItemFlag.HIDE_ATTRIBUTES])
        result.setItemMeta(meta)
        return result
      },
      waterUsage: 3,
    })
  }

  onDisable() {
    this.plugin.extraRecipes.removeRecipe(this.WORKBENCH_ID, this.ID)
  }

  onBlockBreak(listener: any, event: BlockBreakEvent) {
    const player = event.getPlayer()
    const inv = player.getInventory() as PlayerInventory
    const item = inv.getItemInMainHand()
    const meta = item.getItemMeta()
    if (!meta) return
    const name = meta.getDisplayName()
    const block = event.getBlock()
    const blockMat = block.getType()
    if (name === this.PICK_NAME) {
      if (this.isPickActivated(item) && this.isSpawner(blockMat)) {
        event.setCancelled(true)
        item.setAmount(0)
        player
          .getWorld()
          .playSound(player.getLocation(), Sound.ENTITY_ITEM_BREAK, 1, 1)
        const spawnerState = block.getState() as CreatureSpawner
        block.breakNaturally()
        const spawnerItem = new ItemStack(blockMat)
        const spawnerMeta = spawnerItem.getItemMeta()
        spawnerMeta.setDisplayName(
          this.SPAWNER_TEMPLATE(
            this.capitalizeWords(spawnerState.getCreatureTypeName()),
          ),
        )
        spawnerItem.setItemMeta(spawnerMeta)
        this.addGlowEffect(spawnerItem)
        player.getWorld().dropItem(block.getLocation(), spawnerItem)
      } else {
        event.setCancelled(true)
        this.tellPlayer(
          player,
          `${this.CANNOT_USE} ${this.LEARN_MORE}`,
        )
      }
    }
  }

  onBlockPlace(listener: any, event: BlockPlaceEvent) {
    const block = event.getBlockPlaced()
    if (this.isSpawner(block.getType())) {
      const spawnerName = event
        .getItemInHand()
        .getItemMeta()
        .getDisplayName()
      if (this.SPAWNER_TEST.test(spawnerName)) {
        const [, mobName] = this.SPAWNER_TEST.exec(spawnerName)
        const spawner = block.getState() as CreatureSpawner
        spawner.setCreatureTypeByName(mobName.toLowerCase())
        spawner.update()
      }
    }
  }

  onPlayerInteract(listener: any, event: PlayerInteractEvent) {
    const player = event.getPlayer()
    const inv = player.getInventory() as PlayerInventory
    const item = inv.getItemInMainHand()
    const meta = item.getItemMeta()
    if (event.getHand() !== EquipmentSlot.HAND) return
    if (!meta) return
    const name = meta.getDisplayName()
    if (
      name === this.PICK_NAME
      && !this.isPickActivated(item)
      && this.isRightClick(event.getAction())
    ) {
      event.setCancelled(true)
      const level = player.getLevel()
      const isCreative = player.getGameMode() === GameMode.CREATIVE
      if (level < this.LEVEL_COST && !isCreative) {
        player
          .getWorld()
          .playSound(player.getLocation(), Sound.BLOCK_FIRE_EXTINGUISH, 1, 1)
        this.tellPlayer(
          player,
          `You're &aExperience Level &ris not high enough to activate this. ${this.LEARN_MORE}`,
        )
      } else {
        if (!isCreative) {
          this.smartLvlDecr(player, this.LEVEL_COST)
        }
        meta.setLore(
          this.colorText(`&7Status: &aActivated\n\n${this.INFO}`).split('\n'),
        )
        item.setItemMeta(meta)
        this.addGlowEffect(item)
        player
          .getWorld()
          .playSound(
            player.getLocation(),
            Sound.BLOCK_BEACON_POWER_SELECT,
            1,
            1,
          )
      }
    }
  }

  onEntityDamageByEntity(listener: any, event: EntityDamageByEntityEvent) {
    if (!event.getDamager) return // I have no idea why this happens
    const damager = event.getDamager()
    if (Player.$isInstance(damager)) {
      const inv = damager.getInventory() as PlayerInventory
      const item = inv.getItemInMainHand()
      const meta = item.getItemMeta()
      if (!meta) return
      const name = meta.getDisplayName()
      if (name === this.PICK_NAME) {
        event.setCancelled(true)
        this.tellPlayer(
          damager,
          `${this.CANNOT_USE} ${this.LEARN_MORE}`,
        )
      }
    }
  }

  // Internals
  isSpawner(mat: Material): boolean {
    return mat === Material.SPAWNER
  }

  isRightClick(action: Action): boolean {
    return (
      action === Action.RIGHT_CLICK_AIR || action === Action.RIGHT_CLICK_BLOCK
    )
  }

  isPickActivated(pick: ItemStack): boolean {
    return pick.containsEnchantment(this.DUMMY_ENCH)
  }
}
