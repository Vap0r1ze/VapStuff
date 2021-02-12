"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../../../../lib/com/smc/utils/ItemBuilder.js");
const DyeColor_js_1 = require("../../../../../lib/org/bukkit/DyeColor.js");
const Enchantment_js_1 = require("../../../../../lib/org/bukkit/enchantments/Enchantment.js");
const GameMode_js_1 = require("../../../../../lib/org/bukkit/GameMode.js");
const Material_js_1 = require("../../../../../lib/org/bukkit/Material.js");
const Module_js_1 = require("../../../../types/Module.js");
const util_js_1 = require("../../../../util.js");
class RainbowBlocks extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.RAINBOW_TEXT = util_js_1.colorText('&#FE4C4FR&#FC7831a&#FE9F2Bi&#FECB55n&#92F249b&#0FEFACo&#1484E5w');
        this.ID = 'rainbowBlock';
        this.MAX_QUOTA = 5;
        this.COLORABLES = [
            'WOOL',
            'TERRACOTTA',
            // 'CARPET',
            'STAINED_GLASS',
            'STAINED_GLASS_PANE',
            'GLAZED_TERRACOTTA',
            'CONCRETE',
        ];
        this.BLANK_COLOR = DyeColor_js_1.default.WHITE;
        this.COLOR_CYCLE = [
            DyeColor_js_1.default.RED,
            DyeColor_js_1.default.ORANGE,
            DyeColor_js_1.default.YELLOW,
            DyeColor_js_1.default.LIME,
            DyeColor_js_1.default.BLUE,
            DyeColor_js_1.default.CYAN,
            DyeColor_js_1.default.MAGENTA,
            DyeColor_js_1.default.PURPLE,
            DyeColor_js_1.default.PINK,
        ];
        this.cycle = 0;
    }
    onEnable() {
        this.plugin.blockAspects.addAspect(this.ID, {
            serializeItem: (item, player) => {
                if (this.isBlank(item.getType()) && this.isRainbowItem(item)) {
                    const type = item.getType().name().slice(this.BLANK_COLOR.name().length + 1);
                    const data = { type };
                    if (!player.isOp() && player.getGameMode() !== GameMode_js_1.default.CREATIVE) {
                        const uuid = player.getUniqueId().toString();
                        const map = this.plugin.blockAspects.filterMapById(this.ID);
                        const aspectDatas = Array.from(map.values());
                        let amount = 0;
                        for (const aspectData of aspectDatas) {
                            const { owner } = aspectData.data;
                            if (owner === uuid)
                                amount += 1;
                        }
                        if (amount >= this.MAX_QUOTA) {
                            return new Error(`You can only place &b${this.MAX_QUOTA} ${this.RAINBOW_TEXT.toLowerCase()}&r blocks at once!`);
                        }
                        data.owner = uuid;
                    }
                    return data;
                }
                return null;
            },
            createDrop: (data, player) => {
                const { type } = data;
                if (player) {
                    if (player.getGameMode() === GameMode_js_1.default.CREATIVE)
                        return null;
                    const inv = player.getInventory();
                    const tool = inv.getItemInMainHand();
                    switch (type) {
                        case 'STAINED_GLASS':
                        case 'STAINED_GLASS_PANE': {
                            if (!tool)
                                return null;
                            if (!tool.containsEnchantment(Enchantment_js_1.default.SILK_TOUCH))
                                return null;
                            break;
                        }
                        case 'TERRACOTTA':
                        case 'GLAZED_TERRACOTTA':
                        case 'CONCRETE': {
                            if (!tool.getType().name().toLowerCase().includes('pickaxe'))
                                return null;
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
                return this.createRainbowBlock(type);
            },
        });
        for (const type of this.COLORABLES) {
            this.plugin.extraRecipes.addRecipe('simpleAlch', `rainbow:${type}`, {
                name: `Rainbow ${this.displayTypeName(type)}`,
                ingredients: [
                    [Material_js_1.default[`${this.BLANK_COLOR.name()}_${type}`], 1],
                    [Material_js_1.default.HEART_OF_THE_SEA, 1],
                    [Material_js_1.default.RED_DYE, 1],
                    [Material_js_1.default.BLUE_DYE, 1],
                    [Material_js_1.default.MAGENTA_DYE, 1],
                    [Material_js_1.default.LIME_DYE, 1],
                ],
                createResult: () => this.createRainbowBlock(type),
                waterUsage: 3,
            });
        }
        this.paintTaskId = this.runTaskRepeat(this.onPaint.bind(this), 20, 20);
    }
    onDisable() {
        this.plugin.blockAspects.removeAspect(this.ID);
        if (this.paintTaskId) {
            this.cancelTask(this.paintTaskId);
            this.paintTaskId = null;
        }
    }
    onPaint() {
        const aspectMap = this.plugin.blockAspects.filterMapById(this.ID);
        const cycleColor = this.COLOR_CYCLE[this.cycle];
        for (const [where, aspectData] of aspectMap.entries()) {
            if (!where.getChunk().isLoaded())
                continue;
            const { type } = aspectData.data;
            const mat = Material_js_1.default[`${cycleColor.name()}_${type}`];
            const block = where.getBlock();
            block.setType(mat);
        }
        this.cycle += 1;
        if (this.cycle >= this.COLOR_CYCLE.length) {
            this.cycle = 0;
        }
    }
    isRainbowItem(item) {
        return item.getItemMeta().getDisplayName().startsWith(this.RAINBOW_TEXT);
    }
    isBlank(mat) {
        for (const type of this.COLORABLES) {
            if (mat.name() === `${this.BLANK_COLOR.name()}_${type}`) {
                return true;
            }
        }
        return false;
    }
    createRainbowBlock(type) {
        const drop = new ItemBuilder_js_1.default(Material_js_1.default[`${this.BLANK_COLOR.name()}_${type}`])
            .setDisplayName(util_js_1.colorText(`${this.RAINBOW_TEXT} &f${this.displayTypeName(type)}`))
            .setLore(util_js_1.colorText(util_js_1.colorText(`&7You can place &b${this.MAX_QUOTA} ${this.RAINBOW_TEXT.toLowerCase()}\n&7blocks in this world!`)).split('\n'))
            .build();
        this.addGlowEffect(drop);
        return drop;
    }
    displayTypeName(type) {
        return util_js_1.capitalizeWords(type.replace(/_/g, ' ').toLowerCase());
    }
}
exports.default = RainbowBlocks;
