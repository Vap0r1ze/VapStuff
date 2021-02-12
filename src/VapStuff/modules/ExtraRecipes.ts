import Block from '../../lib/org/bukkit/block/Block.js'
import Item from '../../lib/org/bukkit/entity/Item.js'
import PlayerDropItemEvent from '../../lib/org/bukkit/event/player/PlayerDropItemEvent.js'
import ItemStack from '../../lib/org/bukkit/inventory/ItemStack.js'
import Location from '../../lib/org/bukkit/Location.js'
import Material from '../../lib/org/bukkit/Material.js'
import Sound from '../../lib/org/bukkit/Sound.js'
import { Subscribe } from '../services/EventListener.js'
import { GuideSubview } from '../types/GuideSection.js'
import Module from '../types/Module.js'
import RecipePage from './guide/RecipePage.js'
import SimpleAlchemyStation, { SimpleAlchRecipe } from './workbenches/SimpleAlchemyStation/SimpleAlchemyStation.js'
import { serializeLocation } from '../util.js'

export const enum ItemEnv {
  DEFAULT,
  GUIDE_LIST,
  GUIDE_RESULT,
}

export interface Recipe {
  name: string;
  ingredients: [Material, number][];
  advancedIngredients?: [Material, (item: ItemStack) => boolean][];
  createResult: (env?: ItemEnv) => ItemStack;
  sound?: Sound | Sound[];
  postRecipe?: (where: Location) => void;
}

export interface Workbench {
  name: string;
  icon: ItemStack;
  description: string;
  recipes: Record<string, Recipe>;
  sound?: Sound | Sound[];
  naturalDrop?: boolean;
  checkWorkbench: (block: Block, recipe?: Recipe) => boolean;
  postRecipe?: (where: Location, recipe?: Recipe) => void;
  getSubview: (this: Workbench, page: RecipePage, recipeId: string) => GuideSubview;
}

type RecipeRequirements = {
  ingr: (Item | null)[];
  advIngr: (Item | null)[];
}

@Subscribe
export default class ExtraRecipes extends Module {
  get name() { return 'Extra Recipes' }

  trackedMaterials = []

  workbenches: Record<string, Workbench> = {}

  workbenchModules: Module[] = [
    new SimpleAlchemyStation(this.plugin),
  ]

  trackedDrops: Record<string, Item[]> = {}

  scheduleTaskId?: number

  // API
  addWorkbench(workbenchId: string, workbench: Workbench): boolean {
    const exists = workbenchId in this.workbenches
    this.workbenches[workbenchId] = workbench
    this.initializeTracked()
    return !exists
  }

  removeWorkbench(workbenchId: string): boolean {
    const exists = workbenchId in this.workbenches
    if (exists) {
      delete this.workbenches[workbenchId]
      this.initializeTracked()
    }
    return exists
  }

  addRecipe(workbenchId: 'simpleAlch', recipeId: string, recipe: SimpleAlchRecipe): boolean
  addRecipe(workbenchId: string, recipeId: string, recipe: Recipe): boolean {
    const workbench = this.workbenches[workbenchId]
    if (!workbench) return false
    const exists = recipeId in workbench.recipes
    workbench.recipes[recipeId] = recipe
    this.initializeTracked()
    return !exists
  }

  removeRecipe(workbenchId: string, recipeId: string): boolean {
    const workbench = this.workbenches[workbenchId]
    if (!workbench) return false
    const exists = recipeId in workbench.recipes
    if (exists) {
      delete workbench.recipes[recipeId]
      this.initializeTracked()
    }
    return exists
  }

  // Hooks
  onEnable() {
    this.scheduleTaskId = this.runTaskRepeat(this.scheduleTask.bind(this), 0, 20)

    for (const workbenchModule of this.workbenchModules) {
      workbenchModule.onEnable()
    }

    this.initializeTracked()
  }

  onDisable() {
    if (this.scheduleTaskId) {
      this.cancelTask(this.scheduleTaskId)
    }
    for (const workbenchModule of this.workbenchModules) {
      workbenchModule.onDisable()
    }
  }

  onPlayerDropItem(listener: any, event: PlayerDropItemEvent) {
    const drop = event.getItemDrop()
    if (this.trackedMaterials.includes(drop.getItemStack().getType())) {
      const where = serializeLocation(drop.getLocation())
      if (!this.trackedDrops[where]) this.trackedDrops[where] = []
      this.trackedDrops[where].push(drop)
    }
  }

  // Internal
  initializeTracked() {
    this.trackedMaterials.splice(0, this.trackedMaterials.length)
    for (const workbench of Object.values(this.workbenches)) {
      for (const recipe of Object.values(workbench.recipes)) {
        for (const ingr of recipe.ingredients) {
          if (!this.trackedMaterials.includes(ingr[0])) {
            this.trackedMaterials.push(ingr[0])
          }
        }
        if (!recipe.advancedIngredients) continue
        for (const ingr of recipe.advancedIngredients) {
          if (!this.trackedMaterials.includes(ingr[0])) {
            this.trackedMaterials.push(ingr[0])
          }
        }
      }
    }
  }

  scheduleTask() {
    this.trackItems()
    const required: Record<string, Record<string, RecipeRequirements>> = {}
    for (const [workbenchId, workbench] of Object.entries(this.workbenches)) {
      required[workbenchId] = {}
      for (const [recipeId, recipe] of Object.entries(workbench.recipes)) {
        required[workbenchId][recipeId] = {
          ingr: Array(recipe.ingredients.length).fill(null),
          advIngr: Array(recipe.advancedIngredients?.length || 0).fill(null),
        }
      }
    }

    for (const drops of Object.values(this.trackedDrops)) {
      const where = drops[0].getLocation()
      const block = where.getBlock()
      for (const [workbenchId, workbench] of Object.entries(this.workbenches)) {
        for (const [recipeId, recipe] of Object.entries(workbench.recipes)) {
          for (const drop of drops) {
            let index = recipe.ingredients.findIndex(e => e[0] === drop.getItemStack().getType()
                && e[1] <= drop.getItemStack().getAmount())
            if (index > -1) {
              required[workbenchId][recipeId].ingr[index] = drop
            }
            if (recipe.advancedIngredients) {
              index = recipe.advancedIngredients
                .findIndex(e => e[0] === drop.getItemStack().getType() && e[1](drop.getItemStack()))
              if (index > -1) {
                required[workbenchId][recipeId].advIngr[index] = drop
              }
            }
          }
          if (
            required[workbenchId][recipeId].ingr.every(Boolean)
            && required[workbenchId][recipeId].advIngr.every(Boolean)
          ) {
            if (!workbench.checkWorkbench(block, recipe)) {
              continue
            }
            for (let i = 0; i < required[workbenchId][recipeId].ingr.length; i += 1) {
              const stack = required[workbenchId][recipeId].ingr[i].getItemStack()
              stack.setAmount(Math.max(0, stack.getAmount() - recipe.ingredients[i][1]))
            }
            for (let i = 0; i < required[workbenchId][recipeId].advIngr.length; i += 1) {
              const stack = required[workbenchId][recipeId].advIngr[i].getItemStack()
              stack.setAmount(0)
            }
            const result = recipe.createResult()
            if (workbench.naturalDrop) {
              where.getWorld().dropItemNaturally(where, result)
            } else {
              where.getWorld().dropItem(where, result)
            }
            if (workbench.sound) {
              if (Sound.$isInstance(workbench.sound)) {
                where.getWorld().playSound(where, workbench.sound, 1, 1)
              } else {
                workbench.sound.forEach(sound => { where.getWorld().playSound(where, sound, 1, 1) })
              }
            }
            if (recipe.sound) {
              if (Sound.$isInstance(recipe.sound)) {
                where.getWorld().playSound(where, recipe.sound, 1, 1)
              } else {
                recipe.sound.forEach(sound => { where.getWorld().playSound(where, sound, 1, 1) })
              }
            }
            if (workbench.postRecipe) {
              workbench.postRecipe(where, recipe)
            }
            if (recipe.postRecipe) {
              recipe.postRecipe(where)
            }
          }
        }
      }
    }
  }

  trackItems() {
    for (const [where, drops] of Object.entries(this.trackedDrops)) {
      this.trackedDrops[where] = drops.filter(drop => !drop.isDead())
      if (this.trackedDrops[where].length === 0) {
        delete this.trackedDrops[where]
      } else {
        for (let i = 0; i < this.trackedDrops[where].length; i += 1) {
          const drop = this.trackedDrops[where][i]
          const newLoc = serializeLocation(drop.getLocation())
          if (newLoc !== where) {
            this.trackedDrops[where].splice(i, 1)
            i -= 1
            if (!this.trackedDrops[newLoc]) this.trackedDrops[newLoc] = []
            this.trackedDrops[newLoc].push(drop)
          }
        }
        if (this.trackedDrops[where].length === 0) {
          delete this.trackedDrops[where]
        }
      }
    }
  }
}
