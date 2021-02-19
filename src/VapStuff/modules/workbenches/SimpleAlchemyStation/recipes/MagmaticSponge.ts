import ItemBuilder from '../../../../../lib/com/smc/utils/ItemBuilder.js'
import Player from '../../../../../lib/org/bukkit/entity/Player.js'
import BlockPlaceEvent from '../../../../../lib/org/bukkit/event/block/BlockPlaceEvent.js'
import GameMode from '../../../../../lib/org/bukkit/GameMode.js'
import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import Sound from '../../../../../lib/org/bukkit/Sound.js'
import { Subscribe } from '../../../../services/EventListener.js'
import Module from '../../../../types/Module.js'
import { colorText, getDeltasFromTaxicabRadius } from '../../../../util.js'

interface MagmaticSpongeData {
  isLavaWet: boolean;
}

@Subscribe
export default class MagmaticSponge extends Module {
  get name() { return 'Magmatic Sponge' }

  readonly ID = 'magmaticSponge'

  readonly SPONGE_NAME = colorText('&#FF3300Magmatic Sponge')

  readonly SPONGE_NAME_LAVAWET = colorText('&#FF3300Lavawet Magmatic Sponge')

  readonly RADIUS = 7

  onEnable() {
    this.plugin.extraRecipes.addRecipe('simpleAlch', this.ID, {
      waterUsage: 3,
      name: 'Magmatic Sponge',
      ingredients: [
        [Material.SPONGE, 1],
        [Material.MAGMA_BLOCK, 4],
        [Material.MAGMA_CREAM, 4],
        [Material.BLAZE_POWDER, 1],
      ],
      createResult: () => this.createMagmaticSponge(),
    })
    this.plugin.blockAspects.addAspect(this.ID, {
      serializeItem: (item: ItemStack): MagmaticSpongeData => {
        if (item.getType() === Material.WET_SPONGE && this.isMagmaticSpongeLavaWet(item)) {
          return { isLavaWet: true }
        }
        if (item.getType() === Material.SPONGE && this.isMagmaticSponge(item)) {
          return { isLavaWet: false }
        }
        return null
      },
      onPlace: (data: MagmaticSpongeData, event: BlockPlaceEvent) => {
        const location = event.getBlockPlaced().getLocation()
        const locationDataType = location.getBlock().getType()
        const blocks = getDeltasFromTaxicabRadius(this.RADIUS)
        const player = event.getPlayer()
        for (const block of blocks) {
          const deltaLoc = location.clone().add(...block)
          if (deltaLoc.getBlock().getType() === Material.WATER
          && locationDataType === Material.SPONGE) {
            event.setCancelled(true)
            player
              .getWorld()
              .playSound(player.getLocation(), Sound.BLOCK_LAVA_EXTINGUISH, 1, 0.5)
            this.tellPlayer(event.getPlayer(), 'The sponge writhes in agony, don\'t place it near water while it\'s dry!')
            return
          }
          if (deltaLoc.getBlock().getType() === Material.LAVA
          && locationDataType === Material.SPONGE) {
            deltaLoc.getBlock().setType(Material.AIR)
            data.isLavaWet = true
            event.getBlockPlaced().setType(Material.WET_SPONGE)
          }
          if (deltaLoc.getBlock().getType() === Material.WATER
          && locationDataType === Material.WET_SPONGE) {
            deltaLoc.getBlock().setType(Material.AIR)
            data.isLavaWet = false
          }
        }
      },
      createDrop: (data: MagmaticSpongeData, player: Player) => {
        if (player.getGameMode() === GameMode.CREATIVE) return null
        if (data.isLavaWet) return this.createMagmaticSpongeLavaWet()
        return this.createMagmaticSponge()
      },
    })
  }

  private createMagmaticSpongeLavaWet() {
    return new ItemBuilder(Material.WET_SPONGE)
      .setDisplayName(this.SPONGE_NAME_LAVAWET)
      .setLore([
        '&1This thermodynamically invincible',
        '&1sponge needs hydration.',
        `&1Place within &b${this.RADIUS} &1blocks of water`,
        '&1to restore its capabilities',
      ].map(str => colorText(str)))
      .build()
  }

  private createMagmaticSponge() {
    return new ItemBuilder(Material.SPONGE)
      .setDisplayName(this.SPONGE_NAME)
      .setLore([
        '&1This thermodynamically invincible',
        '&1sponge feverishly deletes lava',
        `&1within the range of &b${this.RADIUS}`,
        '&1blocks in all directions',
      ].map(str => colorText(str)))
      .build()
  }

  private isMagmaticSponge(item: ItemStack) {
    return item.getItemMeta().getDisplayName() === this.SPONGE_NAME
  }

  private isMagmaticSpongeLavaWet(item: ItemStack) {
    return item.getItemMeta().getDisplayName() === this.SPONGE_NAME_LAVAWET
  }

  onDisable() {
    this.plugin.extraRecipes.removeRecipe('simpleAlch', this.ID)
    this.plugin.blockAspects.removeAspect(this.ID)
  }
}
