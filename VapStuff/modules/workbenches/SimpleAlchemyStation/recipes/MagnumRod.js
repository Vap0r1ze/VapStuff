"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ItemBuilder_js_1 = require("../../../../../lib/com/smc/utils/ItemBuilder.js");
const EntityType_js_1 = require("../../../../../lib/org/bukkit/entity/EntityType.js");
const GameMode_js_1 = require("../../../../../lib/org/bukkit/GameMode.js");
const Material_js_1 = require("../../../../../lib/org/bukkit/Material.js");
const EventListener_js_1 = require("../../../../services/EventListener.js");
const Module_js_1 = require("../../../../types/Module.js");
const util_js_1 = require("../../../../util.js");
let MagnumRod = class MagnumRod extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.ID = 'magnumRod';
        this.MAGNUM_NAME = util_js_1.colorText('&#FF3080Magnum Rod');
        this.RADIUS = 50;
        this.forbiddenEntities = [
            EntityType_js_1.default.SPIDER,
            EntityType_js_1.default.CAVE_SPIDER,
            EntityType_js_1.default.ENDERMAN,
            EntityType_js_1.default.PIGLIN,
            EntityType_js_1.default.PIGLIN_BRUTE,
            EntityType_js_1.default.POLAR_BEAR,
            EntityType_js_1.default.BLAZE,
            EntityType_js_1.default.CREEPER,
            EntityType_js_1.default.DROWNED,
            EntityType_js_1.default.ELDER_GUARDIAN,
            EntityType_js_1.default.ENDERMITE,
            EntityType_js_1.default.EVOKER,
            EntityType_js_1.default.EVOKER_FANGS,
            EntityType_js_1.default.GHAST,
            EntityType_js_1.default.GUARDIAN,
            EntityType_js_1.default.ELDER_GUARDIAN,
            EntityType_js_1.default.HOGLIN,
            EntityType_js_1.default.HUSK,
            EntityType_js_1.default.MAGMA_CUBE,
            EntityType_js_1.default.PHANTOM,
            EntityType_js_1.default.PILLAGER,
            EntityType_js_1.default.RAVAGER,
            EntityType_js_1.default.SILVERFISH,
            EntityType_js_1.default.SKELETON,
            EntityType_js_1.default.WITHER_SKELETON,
            EntityType_js_1.default.SLIME,
            EntityType_js_1.default.STRAY,
            EntityType_js_1.default.VEX,
            EntityType_js_1.default.VINDICATOR,
            EntityType_js_1.default.WITCH,
            EntityType_js_1.default.ZOGLIN,
            EntityType_js_1.default.ZOMBIE,
            EntityType_js_1.default.ZOMBIE_VILLAGER,
        ];
    }
    get name() { return 'Magnum Rod'; }
    onEnable() {
        this.plugin.extraRecipes.addRecipe('simpleAlch', this.ID, {
            waterUsage: 1,
            name: 'Magnum Rod',
            ingredients: [
                [Material_js_1.default.ENDER_EYE, 2],
                [Material_js_1.default.GHAST_TEAR, 2],
                [Material_js_1.default.END_ROD, 1],
                [Material_js_1.default.SOUL_TORCH, 1],
            ],
            createResult: () => this.createMagnumRod(),
        });
        this.plugin.blockAspects.addAspect(this.ID, {
            serializeItem: (item) => {
                if (item.getType() === Material_js_1.default.END_ROD && this.isMagnumRod(item)) {
                    return {};
                }
                return null;
            },
            createDrop: (data, player) => {
                if (player.getGameMode() === GameMode_js_1.default.CREATIVE)
                    return null;
                return this.createMagnumRod();
            },
        });
    }
    onDisable() {
        this.plugin.extraRecipes.removeRecipe('simpleAlch', this.ID);
        this.plugin.blockAspects.removeAspect(this.ID);
    }
    onEntitySpawn(listener, event) {
        if (!this.forbiddenEntities.includes(event.getEntityType()))
            return;
        const rodMap = this.plugin.blockAspects.filterMapById(this.ID);
        for (const rodLocation of rodMap.keys()) {
            if (event.getLocation().distance(rodLocation) <= this.RADIUS) {
                event.setCancelled(true);
                return;
            }
        }
    }
    createMagnumRod() {
        return new ItemBuilder_js_1.default(Material_js_1.default.END_ROD)
            .setDisplayName(this.MAGNUM_NAME)
            .setLore([
            '&7This ethereal rod counteracts the natural',
            '&7summoning of &chostile &7 creatures',
            `&7within the range of &b${this.RADIUS} &7blocks`,
            '&7in all directions',
        ].map(str => util_js_1.colorText(str)))
            .build();
    }
    isMagnumRod(item) {
        if (item.getItemMeta().getDisplayName() === this.MAGNUM_NAME) {
            return true;
        }
        return false;
    }
};
MagnumRod = __decorate([
    EventListener_js_1.Subscribe
], MagnumRod);
exports.default = MagnumRod;
