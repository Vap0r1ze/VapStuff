"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../../../../lib/com/smc/utils/ItemBuilder.js");
const GameMode_js_1 = require("../../../../../lib/org/bukkit/GameMode.js");
const Material_js_1 = require("../../../../../lib/org/bukkit/Material.js");
const Sound_js_1 = require("../../../../../lib/org/bukkit/Sound.js");
const EventListener_js_1 = require("../../../../services/EventListener.js");
const Module_js_1 = require("../../../../types/Module.js");
const util_js_1 = require("../../../../util.js");
let MagmaticSponge = class MagmaticSponge extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.ID = 'magmaticSponge';
        this.SPONGE_NAME = util_js_1.colorText('&#FF3300Magmatic Sponge');
        this.SPONGE_NAME_LAVAWET = util_js_1.colorText('&#FF3300Lavawet Magmatic Sponge');
        this.RADIUS = 7;
    }
    get name() { return 'Magmatic Sponge'; }
    onEnable() {
        this.plugin.extraRecipes.addRecipe('simpleAlch', this.ID, {
            waterUsage: 3,
            name: 'Magmatic Sponge',
            ingredients: [
                [Material_js_1.default.SPONGE, 1],
                [Material_js_1.default.MAGMA_BLOCK, 4],
                [Material_js_1.default.MAGMA_CREAM, 4],
                [Material_js_1.default.BLAZE_POWDER, 1],
            ],
            createResult: () => this.createMagmaticSponge(),
        });
        this.plugin.blockAspects.addAspect(this.ID, {
            serializeItem: (item) => {
                if (item.getType() === Material_js_1.default.WET_SPONGE && this.isMagmaticSpongeLavaWet(item)) {
                    return { isLavaWet: true };
                }
                if (item.getType() === Material_js_1.default.SPONGE && this.isMagmaticSponge(item)) {
                    return { isLavaWet: false };
                }
                return null;
            },
            onPlace: (data, event) => {
                const location = event.getBlockPlaced().getLocation();
                const locationDataType = location.getBlock().getType();
                const blocks = util_js_1.getDeltasFromTaxicabRadius(this.RADIUS);
                const player = event.getPlayer();
                for (const block of blocks) {
                    const deltaLoc = location.clone().add(...block);
                    if (deltaLoc.getBlock().getType() === Material_js_1.default.WATER
                        && locationDataType === Material_js_1.default.SPONGE) {
                        event.setCancelled(true);
                        player
                            .getWorld()
                            .playSound(player.getLocation(), Sound_js_1.default.BLOCK_LAVA_EXTINGUISH, 1, 0.5);
                        this.tellPlayer(event.getPlayer(), 'The sponge writhes in agony, don\'t place it near water while it\'s dry!');
                        return;
                    }
                    if (deltaLoc.getBlock().getType() === Material_js_1.default.LAVA
                        && locationDataType === Material_js_1.default.SPONGE) {
                        deltaLoc.getBlock().setType(Material_js_1.default.AIR);
                        data.isLavaWet = true;
                        event.getBlockPlaced().setType(Material_js_1.default.WET_SPONGE);
                    }
                    if (deltaLoc.getBlock().getType() === Material_js_1.default.WATER
                        && locationDataType === Material_js_1.default.WET_SPONGE) {
                        deltaLoc.getBlock().setType(Material_js_1.default.AIR);
                        data.isLavaWet = false;
                    }
                }
            },
            createDrop: (data, player) => {
                if (player.getGameMode() === GameMode_js_1.default.CREATIVE)
                    return null;
                if (data.isLavaWet)
                    return this.createMagmaticSpongeLavaWet();
                return this.createMagmaticSponge();
            },
        });
    }
    createMagmaticSpongeLavaWet() {
        return new ItemBuilder_js_1.default(Material_js_1.default.WET_SPONGE)
            .setDisplayName(this.SPONGE_NAME_LAVAWET)
            .setLore([
            '&1This thermodynamically invincible',
            '&1sponge needs hydration.',
            `&1Place within &b${this.RADIUS} &1blocks of water`,
            '&1to restore its capabilities',
        ].map(str => util_js_1.colorText(str)))
            .build();
    }
    createMagmaticSponge() {
        return new ItemBuilder_js_1.default(Material_js_1.default.SPONGE)
            .setDisplayName(this.SPONGE_NAME)
            .setLore([
            '&1This thermodynamically invincible',
            '&1sponge feverishly deletes lava',
            `&1within the range of &b${this.RADIUS}`,
            '&1blocks in all directions',
        ].map(str => util_js_1.colorText(str)))
            .build();
    }
    isMagmaticSponge(item) {
        return item.getItemMeta().getDisplayName() === this.SPONGE_NAME;
    }
    isMagmaticSpongeLavaWet(item) {
        return item.getItemMeta().getDisplayName() === this.SPONGE_NAME_LAVAWET;
    }
    onDisable() {
        this.plugin.extraRecipes.removeRecipe('simpleAlch', this.ID);
        this.plugin.blockAspects.removeAspect(this.ID);
    }
};
MagmaticSponge = __decorate([
    EventListener_js_1.Subscribe
], MagmaticSponge);
exports.default = MagmaticSponge;
