import ItemBuilder from '../../../../../lib/com/smc/utils/ItemBuilder.js'
import DyeColor from '../../../../../lib/org/bukkit/DyeColor.js'
import Enchantment from '../../../../../lib/org/bukkit/enchantments/Enchantment.js'
import Player from '../../../../../lib/org/bukkit/entity/Player.js'
import GameMode from '../../../../../lib/org/bukkit/GameMode.js'
import ItemStack from '../../../../../lib/org/bukkit/inventory/ItemStack.js'
import PlayerInventory from '../../../../../lib/org/bukkit/inventory/PlayerInventory.js'
import Material from '../../../../../lib/org/bukkit/Material.js'
import Module from '../../../../types/Module.js'
import { capitalizeWords, colorText } from '../../../../util.js'

interface RainbowBlockData {
  type: string;
  owner?: string;
}

export default class RainbowBlocks extends Module {
  readonly RAINBOW_TEXT = colorText('&#FE4C4FR&#FC7831a&#FE9F2Bi&#FECB55n&#92F249b&#0FEFACo&#1484E5w')

  readonly ID = 'rainbowBlock'

  readonly MAX_QUOTA = 5

  COLORABLES = [
    'WOOL',
    'TERRACOTTA',
    // 'CARPET',
    'STAINED_GLASS',
    'STAINED_GLASS_PANE',
    'GLAZED_TERRACOTTA',
    'CONCRETE',
  ]

  BLANK_COLOR = DyeColor.WHITE

  COLOR_CYCLE = [
    DyeColor.RED,
    DyeColor.ORANGE,
    DyeColor.YELLOW,
    DyeColor.LIME,
    DyeColor.BLUE,
    DyeColor.CYAN,
    DyeColor.MAGENTA,
    DyeColor.PURPLE,
    DyeColor.PINK,
  ]

  cycle = 0

  paintTaskId: number

  onEnable() {
    this.plugin.blockAspects.addAspect(this.ID, {
      serializeItem: (item: ItemStack, player: Player): RainbowBlockData | Error => {
        if (this.isBlank(item.getType()) && this.isRainbowItem(item)) {
          const type = item.getType().name().slice(this.BLANK_COLOR.name().length + 1)
          const data: RainbowBlockData = { type }
          if (!player.isOp() && player.getGameMode() !== GameMode.CREATIVE) {
            const uuid = player.getUniqueId().toString()
            const map = this.plugin.blockAspects.filterMapById(this.ID)
            const aspectDatas = Array.from(map.values())
            let amount = 0
            for (const aspectData of aspectDatas) {
              const { owner } = aspectData.data as RainbowBlockData
              if (owner === uuid) amount += 1
            }
            if (amount >= this.MAX_QUOTA) {
              return new Error(`You can only place &b${this.MAX_QUOTA} ${
                this.RAINBOW_TEXT.toLowerCase()
              }&r blocks at once!`)
            }
            data.owner = uuid
          }
          return data
        }
        return null
      },
      createDrop: (data: RainbowBlockData, player?: Player): ItemStack => {
        const { type } = data
        if (player) {
          if (player.getGameMode() === GameMode.CREATIVE) return null
          const inv = player.getInventory() as PlayerInventory
          const tool = inv.getItemInMainHand()
          switch (type) {
            case 'STAINED_GLASS':
            case 'STAINED_GLASS_PANE': {
              if (!tool) return null
              if (!tool.containsEnchantment(Enchantment.SILK_TOUCH)) return null
              break
            }
            case 'TERRACOTTA':
            case 'GLAZED_TERRACOTTA':
            case 'CONCRETE': {
              if (!tool.getType().name().toLowerCase().includes('pickaxe')) return null
              break
            }
            default: {
              break
            }
          }
        }
        return this.createRainbowBlock(type)
      },
    })

    for (const type of this.COLORABLES) {
      this.plugin.extraRecipes.addRecipe('simpleAlch', `rainbow:${type}`, {
        name: `Rainbow ${this.displayTypeName(type)}`,
        ingredients: [
          [Material[`${this.BLANK_COLOR.name()}_${type}`], 1],
          [Material.HEART_OF_THE_SEA, 1],
          [Material.RED_DYE, 1],
          [Material.BLUE_DYE, 1],
          [Material.MAGENTA_DYE, 1],
          [Material.LIME_DYE, 1],
        ],
        createResult: () => this.createRainbowBlock(type),
        waterUsage: 3,
      })
    }

    this.paintTaskId = this.runTaskRepeat(this.onPaint.bind(this), 20, 20)
  }

  onDisable() {
    this.plugin.blockAspects.removeAspect(this.ID)

    if (this.paintTaskId) {
      this.cancelTask(this.paintTaskId)
      this.paintTaskId = null
    }
  }

  onPaint() {
    const aspectMap = this.plugin.blockAspects.filterMapById(this.ID)
    const cycleColor = this.COLOR_CYCLE[this.cycle]

    for (const [where, aspectData] of aspectMap.entries()) {
      if (!where.getChunk().isLoaded()) continue
      const { type } = aspectData.data as RainbowBlockData
      const mat = Material[`${cycleColor.name()}_${type}`] as Material
      const block = where.getBlock()
      block.setType(mat)
    }

    this.cycle += 1
    if (this.cycle >= this.COLOR_CYCLE.length) {
      this.cycle = 0
    }
  }

  isRainbowItem(item: ItemStack) {
    return item.getItemMeta().getDisplayName().startsWith(this.RAINBOW_TEXT)
  }

  isBlank(mat: Material) {
    for (const type of this.COLORABLES) {
      if (mat.name() === `${this.BLANK_COLOR.name()}_${type}`) {
        return true
      }
    }
    return false
  }

  createRainbowBlock(type: string) {
    const drop = new ItemBuilder(Material[`${this.BLANK_COLOR.name()}_${type}`])
      .setDisplayName(colorText(`${this.RAINBOW_TEXT} &f${this.displayTypeName(type)}`))
      .setLore(colorText(
        colorText(`&7You can place &b${this.MAX_QUOTA} ${
          this.RAINBOW_TEXT.toLowerCase()
        }\n&7blocks in this world!`),
      ).split('\n'))
      .build()
    this.addGlowEffect(drop)
    return drop
  }

  displayTypeName(type: string) {
    return capitalizeWords(type.replace(/_/g, ' ').toLowerCase())
  }
}
