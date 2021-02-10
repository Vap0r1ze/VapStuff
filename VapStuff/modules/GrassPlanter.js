"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_js_1 = require("../../lib/org/bukkit/event/block/Action.js");
const Material_js_1 = require("../../lib/org/bukkit/Material.js");
const Sound_js_1 = require("../../lib/org/bukkit/Sound.js");
const EventListener_js_1 = require("../services/EventListener.js");
const Module_js_1 = require("../types/Module.js");
let GrassPlanter = class GrassPlanter extends Module_js_1.default {
    get name() { return 'Grass Planter'; }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const inv = player.getInventory();
        const itemInMainHand = inv.getItemInMainHand();
        if (event.getAction() === Action_js_1.default.RIGHT_CLICK_BLOCK
            && itemInMainHand != null
            && itemInMainHand.getType() === Material_js_1.default.WHEAT_SEEDS) {
            const seedCount = itemInMainHand.getAmount();
            if (seedCount < 3)
                return;
            const block = event.getClickedBlock();
            if (block.getType() !== Material_js_1.default.DIRT)
                return;
            block.setType(Material_js_1.default.GRASS_BLOCK);
            player.getWorld().playSound(block.getLocation(), Sound_js_1.default.BLOCK_GRASS_PLACE, 1, 1);
            itemInMainHand.setAmount(Math.max(0, seedCount - 3));
            event.setCancelled(true);
        }
    }
};
GrassPlanter = __decorate([
    EventListener_js_1.Subscribe
], GrassPlanter);
exports.default = GrassPlanter;
