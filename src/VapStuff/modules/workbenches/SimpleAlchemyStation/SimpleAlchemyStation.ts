import ItemBuilder from '../../../../lib/com/smc/utils/ItemBuilder.js'
import Block from '../../../../lib/org/bukkit/block/Block.js'
import BlockFace from '../../../../lib/org/bukkit/block/BlockFace.js'
import Levelled from '../../../../lib/org/bukkit/block/data/Levelled.js'
import Player from '../../../../lib/org/bukkit/entity/Player.js'
import BlockPlaceEvent from '../../../../lib/org/bukkit/event/block/BlockPlaceEvent.js'
import CauldronLevelChangeEvent from '../../../../lib/org/bukkit/event/block/CauldronLevelChangeEvent.js'
import PlayerBucketEmptyEvent from '../../../../lib/org/bukkit/event/player/PlayerBucketEmptyEvent.js'
import ItemStack from '../../../../lib/org/bukkit/inventory/ItemStack.js'
import Material from '../../../../lib/org/bukkit/Material.js'
import Sound from '../../../../lib/org/bukkit/Sound.js'
import { Subscribe } from '../../../services/EventListener.js'
import { GuideSubview } from '../../../types/GuideSection.js'
import Module from '../../../types/Module.js'
import { colorText } from '../../../util.js'
import { Recipe, ItemEnv } from '../../ExtraRecipes.js'
import RecipePage from '../../guide/RecipePage.js'
import { Hint } from '../../Hints.js'
import MagmaticSponge from './recipes/MagmaticSponge.js'
import DebugLamp from './recipes/DebugLamp.js'
import MagnumRod from './recipes/MagnumRod.js'
import RainbowBlocks from './recipes/RainbowBlocks.js'
import SimpleAlchBasics from './recipes/SimpleAlchBasics.js'
import SpawnerDisassembler from './recipes/SpawnerDisassembler.js'

export interface SimpleAlchRecipe extends Recipe {
  waterUsage: 0 | 1 | 2 | 3;
}

@Subscribe
export default class SimpleAlchemyStation extends Module {
  readonly ID = 'simpleAlch'

  readonly NOW_READY = 'Now you\'re ready to perform &binfusion&r!'

  readonly RECIPES: Module[] = [
    new SimpleAlchBasics(this.plugin),
    new RainbowBlocks(this.plugin),
    new MagnumRod(this.plugin),
    new MagmaticSponge(this.plugin),
    new SpawnerDisassembler(this.plugin),
    new DebugLamp(this.plugin),
  ]

  // Hooks
  onEnable() {
    this.plugin.extraRecipes.addWorkbench(this.ID, {
      name: 'Simple Alchemy Station',
      description: this.colorText('&7View all of the &bSimple Infusion\n&7recipes!'),
      icon: new ItemBuilder(Material.CAULDRON)
        .setDisplayName(colorText('&fSimple Alchemy Station'))
        .build(),
      getSubview(page: RecipePage, recipeId: string) {
        const nullIcon = page.context.icons.null
        const recipe = this.recipes[recipeId] as SimpleAlchRecipe
        const ingr = recipe.ingredients
        const advIngr = recipe.advancedIngredients || []
        const ingredients = [...advIngr.map(([mat]) => [mat, 1] as [Material, number]), ...ingr]
        const result = recipe.createResult(ItemEnv.GUIDE_RESULT)
        const workbenchIcon = page.getWorkbenchIcon(this)
        const subview: GuideSubview = {
          id: 'recipe',
          items: [],
          xywh: [1, 1, 8, 3],
        }
        for (let i = 0; i < 12; i += 1) {
          const x = 3 + (i % 4)
          const y = Math.floor(i / 4)
          subview.items[y * 8 + x] = nullIcon
        }
        for (let i = 0; i < Math.min(9, ingredients.length); i += 1) {
          const x = i % 3
          const y = Math.floor(i / 3)
          subview.items[y * 8 + x] = new ItemStack(...ingredients[i])
        }
        for (let i = 0; i < 3; i += 1) {
          const mat = (2 - i) < recipe.waterUsage
            ? Material.BLUE_STAINED_GLASS_PANE
            : Material.GRAY_STAINED_GLASS_PANE
          let info: string
          if (recipe.waterUsage === 0) {
            info = '&7This recipe does not consume\n&7any water levels'
          } else if (recipe.waterUsage === 1) {
            info = '&7This recipe consumes &b1 &7water\n&7level'
          } else {
            info = `&7This recipe consumes &b${recipe.waterUsage} &7water\n&7levels`
          }
          subview.items[(i + 1) * 8 - 1] = new ItemBuilder(mat)
            .setDisplayName(colorText(
              '&#7EBCE6\u2b1b'.repeat(recipe.waterUsage)
                + '&#515E67\u2b1b'.repeat(3 - recipe.waterUsage),
            ))
            .setLore(colorText(info).split('\n'))
            .build()
        }
        subview.items[12] = workbenchIcon
        subview.items[14] = result
        return subview
      },
      checkWorkbench: this.isPrepSimpleAlch.bind(this),
      sound: [Sound.ITEM_BUCKET_EMPTY],
      postRecipe(where, recipe?: SimpleAlchRecipe) {
        const block = where.getBlock()
        const cauldronData = block.getBlockData() as Levelled
        const level = cauldronData.getLevel()
        const usage = recipe.waterUsage || 3
        const final = Math.max(0, level - usage)
        cauldronData.setLevel(final)
        block.setBlockData(cauldronData)
        if (final === 0) {
          const heatSource = where.clone().add(0, -1, 0).getBlock()
          switch (heatSource.getType()) {
            case Material.LAVA:
              heatSource.setType(Material.OBSIDIAN)
              break
            default:
              break
          }
          where.getWorld().playSound(where, Sound.BLOCK_FIRE_EXTINGUISH, 1, 1)
        }
      },
      recipes: {},
    })

    for (const recipeModule of this.RECIPES) {
      recipeModule.onEnable()
    }
  }

  onDisable() {
    for (const recipeModule of this.RECIPES) {
      recipeModule.onDisable()
    }

    this.plugin.extraRecipes.removeWorkbench(this.ID)
  }

  onBlockPlace(listener: any, event: BlockPlaceEvent) {
    const block = event.getBlockPlaced()
    if (this.isSimpleAlchHeat(block.getType())) {
      const where = block.getLocation()
      this.onSimpleAlchNewPrep(where.clone().add(0, 1, 0).getBlock(), event.getPlayer())
    } else if (this.isSimpleAlchMat(block.getType())) {
      let where = block.getLocation()
      switch (block.getType()) {
        case Material.CAULDRON:
          break
        case Material.REDSTONE_TORCH:
          for (let i = 0; i < 4; i += 1) {
            const dxz = this.rotCCW([0, 1], i)
            const newWhere = where.clone().add(dxz[0], 0, dxz[1])
            if (newWhere.getBlock().getType() === Material.CAULDRON) {
              where = newWhere
              break
            }
          }
          break
        case Material.REDSTONE_WIRE:
          for (let i = 0; i < 4; i += 1) {
            const dxz = this.rotCCW([1, 1], i)
            const newWhere = where.clone().add(dxz[0], 0, dxz[1])
            if (newWhere.getBlock().getType() === Material.CAULDRON) {
              where = newWhere
              break
            }
          }
          break
        default:
          break
      }
      const alchBlock = where.getBlock()
      if (alchBlock.getType() !== Material.CAULDRON) return
      this.onSimpleAlchNewMat(alchBlock, event.getPlayer())
    }
  }

  onPlayerBucketEmpty(listener: any, event: PlayerBucketEmptyEvent) {
    const block = event.getBlock()
    this.runTaskLater(() => {
      if (this.isSimpleAlchHeat(block.getType())) {
        const player = event.getPlayer()
        const where = block.getLocation()
        this.onSimpleAlchNewPrep(where.clone().add(0, 1, 0).getBlock(), player)
      }
    }, 1)
  }

  onCauldronLevelChange(listener: any, event: CauldronLevelChangeEvent) {
    const player = event.getEntity()
    if (!Player.$isInstance(player)) return
    const cauldron = event.getBlock()
    const cauldronData = cauldron.getBlockData() as Levelled
    if (event.getNewLevel() !== cauldronData.getMaximumLevel()) return
    this.runTaskLater(() => {
      this.onSimpleAlchNewPrep(cauldron, player)
    }, 1)
  }

  // Internals
  isSimpleAlch(block: Block): boolean {
    if (block.getType() !== Material.CAULDRON) return false
    const where = block.getLocation()
    for (let i = 0; i < 4; i += 1) {
      const dxzDust = this.rotCCW([1, 1], i)
      const dxzTorch = this.rotCCW([0, 1], i)
      if (where.clone().add(dxzDust[0], 0, dxzDust[1]).getBlock().getType()
        !== Material.REDSTONE_WIRE) {
        return false
      }
      if (where.clone().add(dxzTorch[0], 0, dxzTorch[1]).getBlock().getType()
        !== Material.REDSTONE_TORCH) {
        return false
      }
    }
    return true
  }

  isPrepSimpleAlch(block: Block, recipe?: SimpleAlchRecipe, ignoreHints = false): boolean {
    if (!this.isSimpleAlch(block)) return false
    const cauldronData = block.getBlockData() as Levelled
    const level = cauldronData.getLevel()
    const isLeveled = recipe
      ? level >= recipe.waterUsage
      : level === cauldronData.getMaximumLevel()
    const heatSource = block.getRelative(BlockFace.DOWN)
    const isHeatSource = this.isSimpleAlchHeat(heatSource.getType())
    if (!ignoreHints) {
      if (isLeveled && this.isSimpleAlchLowHeat(heatSource.getType())) {
        this.plugin.hints
          .handleHintArea(block.getLocation(), 5, Hint.SIMPLE_ALCH_LOW_HEAT, player => {
            this.tellPlayer(player, '&oHmmm. It seems this &f&oheat source&r&o is not hot enough.')
          })
      } else if (!isLeveled || !isHeatSource) {
        this.plugin.hints
          .handleHintArea(block.getLocation(), 5, Hint.SIMPLE_ALCH_NO_PREP_CRAFT, player => {
            this.tellPlayer(player, '&oPsst. You might want to &b&oprepare&r&o your station first.')
          })
      }
    }
    return isLeveled && isHeatSource
  }

  isSimpleAlchMat(mat: Material): boolean {
    return [Material.REDSTONE_WIRE, Material.REDSTONE_TORCH, Material.CAULDRON].includes(mat)
  }

  isSimpleAlchHeat(mat: Material): boolean {
    return Material.LAVA === mat
  }

  isSimpleAlchLowHeat(mat: Material): boolean {
    return [
      Material.MAGMA_BLOCK,
      Material.FIRE,
      Material.TORCH,
      Material.REDSTONE_TORCH,
      Material.SOUL_TORCH,
      Material.WALL_TORCH,
      Material.REDSTONE_WALL_TORCH,
      Material.SOUL_WALL_TORCH,
      Material.LANTERN,
      Material.REDSTONE_LAMP,
      Material.SOUL_LANTERN,
      Material.SEA_LANTERN,
      Material.CAMPFIRE,
      Material.SOUL_CAMPFIRE,
      Material.BREWING_STAND,
    ].includes(mat)
  }

  onSimpleAlchNewMat(block: Block, player: Player) {
    if (this.isSimpleAlch(block)) {
      if (this.isPrepSimpleAlch(block, null, true)) {
        this.plugin.hints.handleHint(player, Hint.SIMPLE_ALCH_PREP, () => {
          this.tellPlayer(player, `You've just made a &a&lprepared&a &fSimple Alchemy Station&r! ${this.NOW_READY}`)
        }, [Hint.SIMPLE_ALCH_MADE])
      } else {
        this.plugin.hints.handleHint(player, Hint.SIMPLE_ALCH_MADE, () => {
          this.tellPlayer(player, 'You\'ve just made a &fSimple Alchemy Station&r! Don\'t forget to &bprepare&r your station!')
        })
      }
    }
  }

  onSimpleAlchNewPrep(block: Block, player: Player) {
    if (this.isPrepSimpleAlch(block, null, true)) {
      this.plugin.hints.handleHint(player, Hint.SIMPLE_ALCH_PREP, () => {
        this.tellPlayer(player, `You've just &a&lprepared &ra &fSimple Alchemy Station&r! ${this.NOW_READY}`)
      }, [Hint.SIMPLE_ALCH_MADE])
    }
  }
}
