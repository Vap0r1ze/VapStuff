import ItemBuilder from '../../../lib/com/smc/utils/ItemBuilder.js'
import ItemStack from '../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../lib/org/bukkit/Material.js'
import { GuideBase, GuideSection, GuideSubview } from '../../types/GuideSection.js'
import { colorText } from '../../util.js'
import DefaultPage from './DefaultPage.js'

export interface WorkbenchRecipeData {
  name: string;
  ingredients: ItemStack[];
  result: ItemStack;
}

export interface WorkbenchData {
  name:string
  icon: ItemStack,
  description: string;
  recipes: Record<string, WorkbenchRecipeData>;
  getSubview: (this: RecipePage, data: WorkbenchData, recipeId: string) => GuideSubview;
}

export type RecipeData = Record<string, WorkbenchData>

export default class RecipePage extends GuideBase implements GuideSection {
  get name() {
    if (!this.selectedWorkbench) {
      return 'Recipes'
    }
    const workbench = this.recipeData[this.selectedWorkbench]
    if (!this.selectedRecipe) {
      return workbench.name
    }
    const recipe = workbench.recipes[this.selectedRecipe]
    return recipe.name
  }

  pageNumber = 0

  selectedWorkbench?: string = null

  selectedRecipe?: string = null

  recipeData = {
    simpleAlch: {
      name: 'Simple Alchemy Station',
      icon: new ItemBuilder(Material.CAULDRON)
        .setDisplayName(colorText('&fSimple Alchemy Station'))
        .build(),
      description: colorText('&7View all of the &bSimple Infusion\n&7recipes!'),
      recipes: {
        spawnerDisassembler: {
          name: 'Spawner Disassembler',
          ingredients: [
            new ItemStack(Material.NETHERITE_PICKAXE),
            ...this.context.plugin.extraRecipes.recipes.spawnerDisassembler.ingredients
              .map(ingr => new ItemStack(ingr[0], ingr[1])),
          ],
          result: new ItemBuilder(
            this.context.plugin.extraRecipes.recipes.spawnerDisassembler.createResult(),
          )
            .setLore((
              colorText(this.context.plugin.spawnerDisassembler.INFO)
            ).split('\n'))
            .build(),
        },
        nameTag: {
          name: 'Name Tag',
          ingredients: [
            new ItemStack(Material.LEAD),
            new ItemStack(Material.SLIME_BALL),
            new ItemStack(Material.WRITABLE_BOOK),
            new ItemStack(Material.LEATHER),
          ],
          result: new ItemStack(Material.NAME_TAG),
        },
      },
      getSubview(data: WorkbenchData, recipeId: string) {
        const nullIcon = this.context.icons.null
        const { ingredients, result } = data.recipes[recipeId]
        const workbenchIcon = this.getWorkbenchIcon(data)
        const subview: GuideSubview = {
          id: 'recipe',
          items: [],
          xywh: [1, 1, 7, 3],
        }
        for (let i = 0; i < 12; i += 1) {
          const x = 3 + (i % 4)
          const y = Math.floor(i / 4)
          subview.items[y * 7 + x] = nullIcon
        }
        for (let i = 0; i < Math.min(9, ingredients.length); i += 1) {
          const x = i % 3
          const y = Math.floor(i / 3)
          subview.items[y * 7 + x] = ingredients[i]
        }
        subview.items[11] = workbenchIcon
        subview.items[13] = result
        return subview
      },
    },
  } as RecipeData

  getParent = () => {
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
    if (!this.selectedWorkbench) {
      const workbenchesView: GuideSubview = {
        id: 'workbenches',
        items: [],
        xywh: [1, 1, 7, 3],
      }
      for (const [, workbenchData] of Object.entries(this.recipeData)) {
        const icon = new ItemBuilder(workbenchData.icon)
          .setLore(workbenchData.description.split('\n'))
          .build()
        workbenchesView.items.push(icon)
      }
      return [workbenchesView]
    }
    const workbench = this.recipeData[this.selectedWorkbench]
    if (!this.selectedRecipe) {
      const recipesView: GuideSubview = {
        id: 'recipes',
        items: [],
        xywh: [1, 1, 7, 3],
      }
      for (const [, recipeData] of Object.entries(workbench.recipes)) {
        const iconBuilder = new ItemBuilder(recipeData.result.clone())
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
    const recipeView: GuideSubview = workbench.getSubview.call(this, workbench, this.selectedRecipe)
    return [recipeView]
  }

  getButton() {
    return new ItemBuilder(Material.BOOK)
      .setDisplayName(this.context.colorText('&aRecipe Book'))
      .setLore(this.context.colorText('\n&eClick to view!').split('\n'))
      .build()
  }

  onSelect(subviewId: string, index: number) {
    switch (subviewId) {
      case 'workbenches': {
        const workbenchId = Object.keys(this.recipeData)[index]
        if (workbenchId) {
          this.pageNumber = 0
          this.selectedWorkbench = workbenchId
          return this
        }
        break
      }
      case 'recipes': {
        const workbench = this.recipeData[this.selectedWorkbench]
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

  getWorkbenchIcon(workbenchData: WorkbenchData, inList = false): ItemStack {
    const declension = inList ? 'these recipes' : 'this recipe'
    const workbenchName = workbenchData.name.toLowerCase()
    // const workbenchName = workbenchData.icon.getItemMeta().getDisplayName()
    return new ItemBuilder(workbenchData.icon.clone())
      .setLore(colorText(`&7Craft ${declension} by using\n&7a ${workbenchName}!`).split('\n'))
      .build()
  }
}
