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
const EventListener_js_1 = require("../../../../services/EventListener.js");
const Module_js_1 = require("../../../../types/Module.js");
const util_js_1 = require("../../../../util.js");
let DebugLamp = class DebugLamp extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.ASPECT_ID = 'debugLamp';
        this.DEBUG_NAME = util_js_1.colorText('&bDebug');
    }
    onEnable() {
        this.plugin.blockAspects.addAspect(this.ASPECT_ID, {
            serializeItem: (item, player) => {
                if (!item.getItemMeta().getDisplayName().startsWith(this.DEBUG_NAME))
                    return null;
                const uuid = player.getUniqueId().toString();
                return {
                    owner: uuid,
                    type: item.getType().name().replace(/ /g, '_').toUpperCase(),
                    lastEnabled: 0,
                };
            },
            createDrop: (data, player) => {
                if (player && player.getGameMode() === GameMode_js_1.default.CREATIVE)
                    return null;
                return new ItemBuilder_js_1.default(Material_js_1.default[data.type])
                    .setDisplayName(`${this.DEBUG_NAME} ${this.capitalizeWords(data.type.replace(/_/g, ' ').toLowerCase())}`)
                    .build();
            },
        });
    }
    onDisable() {
        this.plugin.blockAspects.removeAspect(this.ASPECT_ID);
    }
    onBlockRedstone(listener, event) {
        const aspect = this.plugin.blockAspects.getBlockAspect(event.getBlock().getLocation());
        if (!aspect || aspect.aspectId !== this.ASPECT_ID)
            return;
        const world = event.getBlock().getWorld();
        const debug = aspect.data;
        const current = event.getNewCurrent();
        const now = world.getFullTime();
        if (current > 0) {
            debug.lastEnabled = now;
        }
        else if (current === 0 && debug.lastEnabled > 0) {
            const player = this.plugin.getPlayer(debug.owner);
            if (player) {
                const delta = now - debug.lastEnabled;
                this.tellPlayer(player, `Debug &f${this.capitalizeWords(debug.type.replace(/_/g, ' ').toLowerCase())}&r: &b${now - debug.lastEnabled} &rtick${delta === 1 ? '' : 's'}`);
            }
            debug.lastEnabled = 0;
        }
    }
    onBlockBreak(listener, event) {
        const where = event.getBlock().getLocation();
        if (where.getBlockX() === 191
            && where.getBlockY() === 64
            && where.getBlockZ() === 464) {
            const things = [
                where.clone().add(1, 0, 1),
                where.clone().add(0, 0, 1),
            ].map(thing => where.getWorld().getBlockAt(thing).getType());
            console.log(things.join(', '));
        }
    }
};
DebugLamp = __decorate([
    EventListener_js_1.Subscribe
], DebugLamp);
exports.default = DebugLamp;
