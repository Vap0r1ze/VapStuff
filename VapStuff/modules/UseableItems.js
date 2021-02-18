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
let UseableItems = class UseableItems extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.enderChestOpen = {};
    }
    get name() { return 'Useable Items'; }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const item = event.getItem();
        const action = event.getAction();
        if (!item)
            return;
        if (action !== Action_js_1.default.RIGHT_CLICK_AIR && this.isLeftClick(action))
            return;
        switch (item.getType()) {
            case Material_js_1.default.CRAFTING_TABLE: {
                player.openWorkbench(null, true);
                break;
            }
            case Material_js_1.default.ENDER_CHEST: {
                if (!this.enderChestOpen[player.getUniqueId()]) {
                    player
                        .getWorld()
                        .playSound(player.getLocation(), Sound_js_1.default.BLOCK_ENDER_CHEST_OPEN, 1, 1);
                }
                this.enderChestOpen[player.getUniqueId()] = true;
                const echest = player.getEnderChest();
                player.openInventory(echest);
                break;
            }
            default:
                break;
        }
    }
    onInventoryClose(listener, event) {
        const player = event.getPlayer();
        if (this.enderChestOpen[player.getUniqueId()]) {
            delete this.enderChestOpen[player.getUniqueId()];
            player
                .getWorld()
                .playSound(player.getLocation(), Sound_js_1.default.BLOCK_ENDER_CHEST_CLOSE, 1, 1);
        }
    }
    isLeftClick(action) {
        return action === Action_js_1.default.LEFT_CLICK_BLOCK || action === Action_js_1.default.LEFT_CLICK_AIR;
    }
};
UseableItems = __decorate([
    EventListener_js_1.Subscribe
], UseableItems);
exports.default = UseableItems;
