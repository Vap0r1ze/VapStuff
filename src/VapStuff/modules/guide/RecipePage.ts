import ItemBuilder from '../../../lib/com/smc/utils/ItemBuilder.js'
import ItemStack from '../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../lib/org/bukkit/Material.js'
import { GuideBase, GuideSection, GuideSubview } from '../../types/GuideSection.js'
import { colorText } from '../../util.js'
import { ItemEnv, Workbench } from '../ExtraRecipes.js'
import DefaultPage from './DefaultPage.js'

export type RecipeData = Record<string, Workbench>

export default class RecipePage extends GuideBase implements GuideSection {
  get name() {
    const { extraRecipes } = this.context.plugin
    if (!this.selectedWorkbench) {
      return 'Recipes'
    }
    const workbench = extraRecipes.workbenches[this.selectedWorkbench]
    if (!this.selectedRecipe) {
      return workbench.name
    }
    const recipe = workbench.recipes[this.selectedRecipe]
    return recipe.name
  }

  pageNumber = 0

  selectedWorkbench?: string = null

  selectedRecipe?: string = null

  getParent() {
    if (!this.selectedWorkbench) {
      return new DefaultPage(this.context, this.player)
    }
    const page = new RecipePage(this.context, this.player)
    if (!this.selectedRecipe) {
      return page
    }
    page.selectedWorkbench = this.selectedWorkbench
    return page
  }

  getSubviews() {
    const { extraRecipes } = this.context.plugin
    if (!this.selectedWorkbench) {
      const workbenchesView: GuideSubview = {
        id: 'workbenches',
        items: [],
        xywh: [2, 2, 5, 2],
      }
      for (const workbench of Object.values(extraRecipes.workbenches)) {
        const icon = new ItemBuilder(workbench.icon)
          .setLore(workbench.description.split('\n'))
          .build()
        workbenchesView.items.push(icon)
      }
      return [workbenchesView]
    }
    const workbench = extraRecipes.workbenches[this.selectedWorkbench]
    if (!this.selectedRecipe) {
      const recipesView: GuideSubview = {
        id: 'recipes',
        items: [],
        xywh: [2, 2, 5, 2],
      }
      for (const recipe of Object.values(workbench.recipes)) {
        const iconBuilder = new ItemBuilder(recipe.createResult(ItemEnv.GUIDE_LIST))
        const icon = iconBuilder
          .setLore([
            ...iconBuilder.getLore(),
            '',
            colorText('&eClick to view recipe!'),
          ])
          .build()
        recipesView.items.push(icon)
      }
      const workbenchHeader: GuideSubview = {
        id: 'workbenchHeader',
        items: [
          this.getWorkbenchIcon(workbench, true),
        ],
        xywh: [4, 0, 1, 1],
      }
      return [recipesView, workbenchHeader]
    }
    const recipeView: GuideSubview = workbench.getSubview(this, this.selectedRecipe)
    return [recipeView]
  }

  getButton() {
    return new ItemBuilder(Material.BOOK)
      .setDisplayName(this.context.colorText('&aRecipe Book'))
      .setLore(this.context.colorText('\n&eClick to view!').split('\n'))
      .build()
  }

  onSelect(subviewId: string, index: number) {
    const { extraRecipes } = this.context.plugin
    switch (subviewId) {
      case 'workbenches': {
        const workbenchId = Object.keys(extraRecipes.workbenches)[index]
        if (workbenchId) {
          this.pageNumber = 0
          this.selectedWorkbench = workbenchId
          return this
        }
        break
      }
      case 'recipes': {
        const workbench = extraRecipes.workbenches[this.selectedWorkbench]
        const recipeId = Object.keys(workbench.recipes)[index]
        if (recipeId) {
          this.pageNumber = 0
          this.selectedRecipe = recipeId
          return this
        }
        break
      }
      default: {
        break
      }
    }
    return null
  }

  getWorkbenchIcon(workbench: Workbench, inList = false): ItemStack {
    const declension = inList ? 'these recipes' : 'this recipe'
    const workbenchName = workbench.name.toLowerCase()
    // const workbenchName = workbench.icon.getItemMeta().getDisplayName()
    return new ItemBuilder(workbench.icon.clone())
      .setLore(colorText(`&7Craft ${declension} by using\n&7a ${workbenchName}!`).split('\n'))
      .build()
  }
}
