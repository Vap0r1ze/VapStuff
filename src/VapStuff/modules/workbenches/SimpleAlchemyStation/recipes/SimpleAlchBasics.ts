import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import Module from '../../../../types/Module.js'

export default class SimpleAlchBasics extends Module {
  readonly WORKBENCH_ID = 'simpleAlch'

  onEnable() {
    this.plugin.extraRecipes.addRecipe(this.WORKBENCH_ID, 'nameTag', {
      name: 'Name Tag',
      ingredients: [
        [Material.LEAD, 1],
        [Material.SLIME_BALL, 1],
        [Material.WRITABLE_BOOK, 1],
        [Material.LEATHER, 1],
      ],
      createResult: () => new ItemStack(Material.NAME_TAG),
      waterUsage: 1,
    })
  }

  onDisable() {
    this.plugin.extraRecipes.removeRecipe(this.WORKBENCH_ID, 'nameTag')
  }
}
