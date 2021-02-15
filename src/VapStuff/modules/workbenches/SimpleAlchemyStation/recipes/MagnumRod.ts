import ItemBuilder from '../../../../../lib/com/smc/utils/ItemBuilder.js'
import EntityType from '../../../../../lib/org/bukkit/entity/EntityType.js'
import Player from '../../../../../lib/org/bukkit/entity/Player.js'
import EntitySpawnEvent from '../../../../../lib/org/bukkit/event/entity/EntitySpawnEvent.js'
import GameMode from '../../../../../lib/org/bukkit/GameMode.js'
import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import { Subscribe } from '../../../../services/EventListener.js'
import Module from '../../../../types/Module.js'
import { colorText } from '../../../../util.js'

@Subscribe
export default class MagnumRod extends Module {
  get name() { return 'Magnum Rod' }

  readonly ID = 'magnumRod'

  readonly MAGNUM_NAME = colorText('&#FF3080Magnum Rod')

  readonly RADIUS = 50

  forbiddenEntities = [
    EntityType.SPIDER,
    EntityType.CAVE_SPIDER,
    EntityType.ENDERMAN,
    EntityType.PIGLIN,
    EntityType.PIGLIN_BRUTE,
    EntityType.POLAR_BEAR,
    EntityType.BLAZE,
    EntityType.CREEPER,
    EntityType.DROWNED,
    EntityType.ELDER_GUARDIAN,
    EntityType.ENDERMITE,
    EntityType.EVOKER,
    EntityType.EVOKER_FANGS,
    EntityType.GHAST,
    EntityType.GUARDIAN,
    EntityType.ELDER_GUARDIAN,
    EntityType.HOGLIN,
    EntityType.HUSK,
    EntityType.MAGMA_CUBE,
    EntityType.PHANTOM,
    EntityType.PILLAGER,
    EntityType.RAVAGER,
    EntityType.SILVERFISH,
    EntityType.SKELETON,
    EntityType.WITHER_SKELETON,
    EntityType.SLIME,
    EntityType.STRAY,
    EntityType.VEX,
    EntityType.VINDICATOR,
    EntityType.WITCH,
    EntityType.ZOGLIN,
    EntityType.ZOMBIE,
    EntityType.ZOMBIE_VILLAGER,
  ]

  onEnable() {
    this.plugin.extraRecipes.addRecipe('simpleAlch', this.ID, {
      waterUsage: 1,
      name: 'Magnum Rod',
      ingredients: [
        [Material.ENDER_EYE, 2],
        [Material.GHAST_TEAR, 2],
        [Material.END_ROD, 1],
        [Material.SOUL_TORCH, 1],
      ],
      createResult: () => (new ItemBuilder(Material.END_ROD)
        .setDisplayName(this.MAGNUM_NAME)
        .build()),
    })
    this.plugin.blockAspects.addAspect(this.ID, {
      serializeItem: (item: ItemStack) => {
        if (item.getType() === Material.END_ROD && this.isMagnumRod(item)) {
          return {}
        }
        return null
      },
      createDrop: (data: any, player: Player) => {
        if (player.getGameMode() === GameMode.CREATIVE) return null
        return new ItemBuilder(Material.END_ROD)
          .setDisplayName(this.MAGNUM_NAME)
          .build()
      },
    })
  }

  onDisable() {
    this.plugin.extraRecipes.removeRecipe('simpleAlch', this.ID)
    this.plugin.blockAspects.removeAspect(this.ID)
  }

  onEntitySpawn(listener: any, event: EntitySpawnEvent) {
    if (!this.forbiddenEntities.includes(event.getEntityType())) return
    const rodMap = this.plugin.blockAspects.filterMapById(this.ID)
    for (const rodLocation of rodMap.keys()) {
      if (event.getLocation().distance(rodLocation) <= this.RADIUS) {
        event.setCancelled(true)
        return
      }
    }
  }

  private isMagnumRod(item: ItemStack): boolean {
    if (item.getItemMeta().getDisplayName() === this.MAGNUM_NAME) {
      return true
    }
    return false
  }
}
