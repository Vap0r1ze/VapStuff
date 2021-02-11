import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import Module from '../../../../types/Module.js'
import { SimpleAlchRecipe } from '../SimpleAlchemyStation.js'
import MinecraftData = require('minecraft-data')

type Component = Material | [Material, number]

export default class SimpleAlchBasics extends Module {
  readonly WORKBENCH_ID = 'simpleAlch'

  onEnable() {
    this.addSimpleRecipe('leather', [
      Material.BLAZE_POWDER,
      Material.ROTTEN_FLESH,
    ], Material.LEATHER)
    this.addSimpleRecipe('nameTag', [
      Material.LEAD,
      Material.SLIME_BALL,
      Material.WRITABLE_BOOK,
      Material.LEATHER,
    ], Material.NAME_TAG)
  }

  onDisable() {
    this.plugin.extraRecipes.removeRecipe(this.WORKBENCH_ID, 'nameTag')
  }

  addSimpleRecipe(
    id: string,
    ingredients: Component[],
    result: Component,
    waterUsage: SimpleAlchRecipe['waterUsage'] = 1,
  ) {
    let amount = 1
    let mat: Material
    if (Material.$isInstance(result)) {
      mat = result
    } else {
      [mat, amount] = result
    }
    this.plugin.extraRecipes.addRecipe(this.WORKBENCH_ID, id, {
      name: MinecraftData('1.16.5').itemsByName[`${mat.getKey()}`.replace('minecraft:', '')].displayName,
      ingredients: ingredients.map(ingr => (Material.$isInstance(ingr) ? [ingr, 1] : ingr)),
      createResult: () => new ItemStack(mat, amount),
      waterUsage,
    })
  }
}
