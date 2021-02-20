"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../../../lib/com/smc/utils/ItemBuilder.js");
const BlockFace_js_1 = require("../../../../lib/org/bukkit/block/BlockFace.js");
const Player_js_1 = require("../../../../lib/org/bukkit/entity/Player.js");
const ItemStack_js_1 = require("../../../../lib/org/bukkit/inventory/ItemStack.js");
const Material_js_1 = require("../../../../lib/org/bukkit/Material.js");
const Sound_js_1 = require("../../../../lib/org/bukkit/Sound.js");
const EventListener_js_1 = require("../../../services/EventListener.js");
const Module_js_1 = require("../../../types/Module.js");
const util_js_1 = require("../../../util.js");
const MagmaticSponge_js_1 = require("./recipes/MagmaticSponge.js");
const DebugLamp_js_1 = require("./recipes/DebugLamp.js");
const MagnumRod_js_1 = require("./recipes/MagnumRod.js");
const RainbowBlocks_js_1 = require("./recipes/RainbowBlocks.js");
const SimpleAlchBasics_js_1 = require("./recipes/SimpleAlchBasics.js");
const SpawnerDisassembler_js_1 = require("./recipes/SpawnerDisassembler.js");
let SimpleAlchemyStation = class SimpleAlchemyStation extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.ID = 'simpleAlch';
        this.NOW_READY = 'Now you\'re ready to perform &binfusion&r!';
        this.RECIPES = [
            new SimpleAlchBasics_js_1.default(this.plugin),
            new RainbowBlocks_js_1.default(this.plugin),
            new MagnumRod_js_1.default(this.plugin),
            new MagmaticSponge_js_1.default(this.plugin),
            new SpawnerDisassembler_js_1.default(this.plugin),
            new DebugLamp_js_1.default(this.plugin),
        ];
    }
    // Hooks
    onEnable() {
        this.plugin.extraRecipes.addWorkbench(this.ID, {
            name: 'Simple Alchemy Station',
            description: this.colorText('&7View all of the &bSimple Infusion\n&7recipes!'),
            icon: new ItemBuilder_js_1.default(Material_js_1.default.CAULDRON)
                .setDisplayName(util_js_1.colorText('&fSimple Alchemy Station'))
                .build(),
            getSubview(page, recipeId) {
                const nullIcon = page.context.icons.null;
                const recipe = this.recipes[recipeId];
                const ingr = recipe.ingredients;
                const advIngr = recipe.advancedIngredients || [];
                const ingredients = [...advIngr.map(([mat]) => [mat, 1]), ...ingr];
                const result = recipe.createResult(2 /* GUIDE_RESULT */);
                const workbenchIcon = page.getWorkbenchIcon(this);
                const subview = {
                    id: 'recipe',
                    items: [],
                    xywh: [1, 1, 8, 3],
                };
                for (let i = 0; i < 12; i += 1) {
                    const x = 3 + (i % 4);
                    const y = Math.floor(i / 4);
                    subview.items[y * 8 + x] = nullIcon;
                }
                for (let i = 0; i < Math.min(9, ingredients.length); i += 1) {
                    const x = i % 3;
                    const y = Math.floor(i / 3);
                    subview.items[y * 8 + x] = new ItemStack_js_1.default(...ingredients[i]);
                }
                for (let i = 0; i < 3; i += 1) {
                    const mat = (2 - i) < recipe.waterUsage
                        ? Material_js_1.default.BLUE_STAINED_GLASS_PANE
                        : Material_js_1.default.GRAY_STAINED_GLASS_PANE;
                    let info;
                    if (recipe.waterUsage === 0) {
                        info = '&7This recipe does not consume\n&7any water levels';
                    }
                    else if (recipe.waterUsage === 1) {
                        info = '&7This recipe consumes &b1 &7water\n&7level';
                    }
                    else {
                        info = `&7This recipe consumes &b${recipe.waterUsage} &7water\n&7levels`;
                    }
                    subview.items[(i + 1) * 8 - 1] = new ItemBuilder_js_1.default(mat)
                        .setDisplayName(util_js_1.colorText('&#7EBCE6\u2b1b'.repeat(recipe.waterUsage)
                        + '&#515E67\u2b1b'.repeat(3 - recipe.waterUsage)))
                        .setLore(util_js_1.colorText(info).split('\n'))
                        .build();
                }
                subview.items[12] = workbenchIcon;
                subview.items[14] = result;
                return subview;
            },
            checkWorkbench: this.isPrepSimpleAlch.bind(this),
            sound: [Sound_js_1.default.ITEM_BUCKET_EMPTY],
            postRecipe(where, recipe) {
                const block = where.getBlock();
                const cauldronData = block.getBlockData();
                const level = cauldronData.getLevel();
                const usage = recipe.waterUsage || 3;
                const final = Math.max(0, level - usage);
                cauldronData.setLevel(final);
                block.setBlockData(cauldronData);
                if (final === 0) {
                    const heatSource = where.clone().add(0, -1, 0).getBlock();
                    switch (heatSource.getType()) {
                        case Material_js_1.default.LAVA:
                            heatSource.setType(Material_js_1.default.OBSIDIAN);
                            break;
                        default:
                            break;
                    }
                    where.getWorld().playSound(where, Sound_js_1.default.BLOCK_FIRE_EXTINGUISH, 1, 1);
                }
            },
            recipes: {},
        });
        for (const recipeModule of this.RECIPES) {
            recipeModule.onEnable();
        }
    }
    onDisable() {
        for (const recipeModule of this.RECIPES) {
            recipeModule.onDisable();
        }
        this.plugin.extraRecipes.removeWorkbench(this.ID);
    }
    onBlockPlace(listener, event) {
        const block = event.getBlockPlaced();
        if (this.isSimpleAlchHeat(block.getType())) {
            const where = block.getLocation();
            this.onSimpleAlchNewPrep(where.clone().add(0, 1, 0).getBlock(), event.getPlayer());
        }
        else if (this.isSimpleAlchMat(block.getType())) {
            let where = block.getLocation();
            switch (block.getType()) {
                case Material_js_1.default.CAULDRON:
                    break;
                case Material_js_1.default.REDSTONE_TORCH:
                    for (let i = 0; i < 4; i += 1) {
                        const dxz = this.rotCCW([0, 1], i);
                        const newWhere = where.clone().add(dxz[0], 0, dxz[1]);
                        if (newWhere.getBlock().getType() === Material_js_1.default.CAULDRON) {
                            where = newWhere;
                            break;
                        }
                    }
                    break;
                case Material_js_1.default.REDSTONE_WIRE:
                    for (let i = 0; i < 4; i += 1) {
                        const dxz = this.rotCCW([1, 1], i);
                        const newWhere = where.clone().add(dxz[0], 0, dxz[1]);
                        if (newWhere.getBlock().getType() === Material_js_1.default.CAULDRON) {
                            where = newWhere;
                            break;
                        }
                    }
                    break;
                default:
                    break;
            }
            const alchBlock = where.getBlock();
            if (alchBlock.getType() !== Material_js_1.default.CAULDRON)
                return;
            this.onSimpleAlchNewMat(alchBlock, event.getPlayer());
        }
    }
    onPlayerBucketEmpty(listener, event) {
        const block = event.getBlock();
        this.runTaskLater(() => {
            if (this.isSimpleAlchHeat(block.getType())) {
                const player = event.getPlayer();
                const where = block.getLocation();
                this.onSimpleAlchNewPrep(where.clone().add(0, 1, 0).getBlock(), player);
            }
        }, 1);
    }
    onCauldronLevelChange(listener, event) {
        const player = event.getEntity();
        if (!Player_js_1.default.$isInstance(player))
            return;
        const cauldron = event.getBlock();
        const cauldronData = cauldron.getBlockData();
        if (event.getNewLevel() !== cauldronData.getMaximumLevel())
            return;
        this.runTaskLater(() => {
            this.onSimpleAlchNewPrep(cauldron, player);
        }, 1);
    }
    // Internals
    isSimpleAlch(block) {
        if (block.getType() !== Material_js_1.default.CAULDRON)
            return false;
        const where = block.getLocation();
        for (let i = 0; i < 4; i += 1) {
            const dxzDust = this.rotCCW([1, 1], i);
            const dxzTorch = this.rotCCW([0, 1], i);
            if (where.clone().add(dxzDust[0], 0, dxzDust[1]).getBlock().getType()
                !== Material_js_1.default.REDSTONE_WIRE) {
                return false;
            }
            if (where.clone().add(dxzTorch[0], 0, dxzTorch[1]).getBlock().getType()
                !== Material_js_1.default.REDSTONE_TORCH) {
                return false;
            }
        }
        return true;
    }
    isPrepSimpleAlch(block, recipe, ignoreHints = false) {
        if (!this.isSimpleAlch(block))
            return false;
        const cauldronData = block.getBlockData();
        const level = cauldronData.getLevel();
        const isLeveled = recipe
            ? level >= recipe.waterUsage
            : level === cauldronData.getMaximumLevel();
        const heatSource = block.getRelative(BlockFace_js_1.default.DOWN);
        const isHeatSource = this.isSimpleAlchHeat(heatSource.getType());
        if (!ignoreHints) {
            if (isLeveled && this.isSimpleAlchLowHeat(heatSource.getType())) {
                this.plugin.hints
                    .handleHintArea(block.getLocation(), 5, 3 /* SIMPLE_ALCH_LOW_HEAT */, player => {
                    this.tellPlayer(player, '&oHmmm. It seems this &f&oheat source&r&o is not hot enough.');
                });
            }
            else if (!isLeveled || !isHeatSource) {
                this.plugin.hints
                    .handleHintArea(block.getLocation(), 5, 2 /* SIMPLE_ALCH_NO_PREP_CRAFT */, player => {
                    this.tellPlayer(player, '&oPsst. You might want to &b&oprepare&r&o your station first.');
                });
            }
        }
        return isLeveled && isHeatSource;
    }
    isSimpleAlchMat(mat) {
        return [Material_js_1.default.REDSTONE_WIRE, Material_js_1.default.REDSTONE_TORCH, Material_js_1.default.CAULDRON].includes(mat);
    }
    isSimpleAlchHeat(mat) {
        return Material_js_1.default.LAVA === mat;
    }
    isSimpleAlchLowHeat(mat) {
        return [
            Material_js_1.default.MAGMA_BLOCK,
            Material_js_1.default.FIRE,
            Material_js_1.default.TORCH,
            Material_js_1.default.REDSTONE_TORCH,
            Material_js_1.default.SOUL_TORCH,
            Material_js_1.default.WALL_TORCH,
            Material_js_1.default.REDSTONE_WALL_TORCH,
            Material_js_1.default.SOUL_WALL_TORCH,
            Material_js_1.default.LANTERN,
            Material_js_1.default.REDSTONE_LAMP,
            Material_js_1.default.SOUL_LANTERN,
            Material_js_1.default.SEA_LANTERN,
            Material_js_1.default.CAMPFIRE,
            Material_js_1.default.SOUL_CAMPFIRE,
            Material_js_1.default.BREWING_STAND,
        ].includes(mat);
    }
    onSimpleAlchNewMat(block, player) {
        if (this.isSimpleAlch(block)) {
            if (this.isPrepSimpleAlch(block, null, true)) {
                this.plugin.hints.handleHint(player, 1 /* SIMPLE_ALCH_PREP */, () => {
                    this.tellPlayer(player, `You've just made a &a&lprepared&a &fSimple Alchemy Station&r! ${this.NOW_READY}`);
                }, [0 /* SIMPLE_ALCH_MADE */]);
            }
            else {
                this.plugin.hints.handleHint(player, 0 /* SIMPLE_ALCH_MADE */, () => {
                    this.tellPlayer(player, 'You\'ve just made a &fSimple Alchemy Station&r! Don\'t forget to &bprepare&r your station!');
                });
            }
        }
    }
    onSimpleAlchNewPrep(block, player) {
        if (this.isPrepSimpleAlch(block, null, true)) {
            this.plugin.hints.handleHint(player, 1 /* SIMPLE_ALCH_PREP */, () => {
                this.tellPlayer(player, `You've just &a&lprepared &ra &fSimple Alchemy Station&r! ${this.NOW_READY}`);
            }, [0 /* SIMPLE_ALCH_MADE */]);
        }
    }
};
SimpleAlchemyStation = __decorate([
    EventListener_js_1.Subscribe
], SimpleAlchemyStation);
exports.default = SimpleAlchemyStation;
