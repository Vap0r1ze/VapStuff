"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_js_1 = require("../config.js");
const Bukkit_js_1 = require("../../lib/org/bukkit/Bukkit.js");
const Action_js_1 = require("../../lib/org/bukkit/event/block/Action.js");
const ClickType_js_1 = require("../../lib/org/bukkit/event/inventory/ClickType.js");
const InventoryAction_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryAction.js");
const InventoryType_js_1 = require("../../lib/org/bukkit/event/inventory/InventoryType.js");
const Material_js_1 = require("../../lib/org/bukkit/Material.js");
const Sound_js_1 = require("../../lib/org/bukkit/Sound.js");
const Module_js_1 = require("../types/Module.js");
const EventListener_js_1 = require("../services/EventListener.js");
let ShulkerPocket = class ShulkerPocket extends Module_js_1.default {
    constructor() {
        super(...arguments);
        this.shulkerBoxSlots = {};
        this.shulkerBoxOpen = {};
        this.shulkerBoxOnCursors = {};
    }
    get name() { return 'Shulker Pocket'; }
    onDisable() {
        for (const playerName of Object.keys(this.shulkerBoxOpen)) {
            const player = this.plugin.server.getPlayer(playerName);
            if (player) {
                player.closeInventory();
            }
        }
    }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const itemInMainHand = player.getInventory().getItemInMainHand();
        const action = event.getAction();
        if ((action === Action_js_1.default.RIGHT_CLICK_AIR || this.isLeftClick(action))
            && itemInMainHand != null
            && this.isShulkerBox(itemInMainHand.getType())
            && !this.shulkerBoxOpen[player.getName()]) {
            this.shulkerBoxOpen[player.getName()] = true;
            const meta = itemInMainHand.getItemMeta();
            const shulkerBox = meta.getBlockState();
            const title = meta.getDisplayName() == null || meta.getDisplayName() === ''
                ? itemInMainHand
                    .getType()
                    .name()
                    .split('_')
                    .map(w => w[0] + w.slice(1).toLowerCase())
                    .join(' ')
                : meta.getDisplayName();
            const inv = Bukkit_js_1.default.createInventory(null, InventoryType_js_1.default.SHULKER_BOX, title);
            inv.setContents(shulkerBox.getInventory().getContents());
            player.openInventory(inv);
            this.shulkerBoxSlots[player.getUniqueId()] = this.toRawSlot(player.getInventory().getHeldItemSlot());
            player
                .getWorld()
                .playSound(player.getLocation(), Sound_js_1.default.BLOCK_SHULKER_BOX_OPEN, 1, 1);
            event.setCancelled(true);
            this.debugLog(event);
        }
    }
    onInventoryClose(listener, event) {
        const player = event.getPlayer();
        if (this.shulkerBoxSlots[player.getUniqueId()]) {
            const items = event.getInventory().getContents();
            this.saveShulkerBoxByPlayer(player, items);
            delete this.shulkerBoxSlots[player.getUniqueId()];
            if (this.shulkerBoxOpen[player.getName()]) {
                delete this.shulkerBoxOpen[player.getName()];
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound_js_1.default.BLOCK_SHULKER_BOX_CLOSE, 1, 1);
            }
        }
    }
    onInventoryClick(listener, event) {
        const player = event.getWhoClicked();
        if (this.shulkerBoxSlots[player.getUniqueId()]) {
            this.debugLog(event);
            if (event.getRawSlot() === this.shulkerBoxSlots[player.getUniqueId()]) {
                event.setCancelled(true);
                return;
            }
            if (event.getCursor() != null
                && this.isShulkerBox(event.getCursor().getType())
                && this.isInShulkerBox(event.getRawSlot())) {
                event.setCancelled(true);
                return;
            }
            const items = event.getInventory().getContents();
            this.saveShulkerBoxByPlayer(player, items);
            if (this.shulkerBoxSlots[player.getUniqueId()] === event.getRawSlot()) {
                if (this.isPickupAction(event.getAction())) {
                    this.shulkerBoxOnCursors[player.getUniqueId()] = true;
                    return;
                }
                if (event.getAction() === InventoryAction_js_1.default.DROP_ALL_SLOT
                    || event.getAction() === InventoryAction_js_1.default.DROP_ONE_SLOT) {
                    this.dropItem(event.getCurrentItem(), player);
                    event.setCurrentItem(null);
                    player.closeInventory();
                    return;
                }
            }
            let newItemSlot;
            if (this.shulkerBoxOnCursors[player.getUniqueId()]) {
                if (event.getAction() === InventoryAction_js_1.default.DROP_ALL_CURSOR
                    || event.getAction() === InventoryAction_js_1.default.DROP_ONE_CURSOR) {
                    player.closeInventory();
                    return;
                }
                if (this.isPlaceAction(event.getAction())) {
                    newItemSlot = event.getRawSlot();
                    delete this.shulkerBoxOnCursors[player.getUniqueId()];
                }
            }
            if (event.getClick() === ClickType_js_1.default.NUMBER_KEY
                && (event.getAction() === InventoryAction_js_1.default.HOTBAR_SWAP
                    || event.getAction() === InventoryAction_js_1.default.HOTBAR_MOVE_AND_READD)) {
                if (this.isInShulkerBox(event.getRawSlot())
                    && player.getInventory().getItem(event.getHotbarButton()) != null
                    && this.isShulkerBox(player
                        .getInventory()
                        .getItem(event.getHotbarButton())
                        .getType())) {
                    event.setCancelled(true);
                    return;
                }
                if (this.shulkerBoxSlots[player.getUniqueId()] === event.getRawSlot()) {
                    newItemSlot = this.toRawSlot(event.getHotbarButton());
                }
                else if (this.shulkerBoxSlots[player.getUniqueId()]
                    === this.toRawSlot(event.getHotbarButton())) {
                    newItemSlot = event.getRawSlot();
                }
            }
            if (event.getAction() === InventoryAction_js_1.default.MOVE_TO_OTHER_INVENTORY
                && event.getCurrentItem() != null
                && this.isShulkerBox(event.getCurrentItem().getType())) {
                if (event.getRawSlot() > 53 && event.getRawSlot() < 63) {
                    newItemSlot = this.moveItemToSlotRange(9, 36, event);
                }
                else if (event.getRawSlot() > 26 && event.getRawSlot() < 54) {
                    newItemSlot = this.moveItemToSlotRange(0, 9, event);
                }
                if (newItemSlot != null
                    && this.shulkerBoxSlots[player.getUniqueId()] !== event.getRawSlot()) {
                    newItemSlot = null;
                }
                event.setCancelled(true);
            }
            if (newItemSlot != null) {
                this.shulkerBoxSlots[player.getUniqueId()] = newItemSlot;
            }
        }
    }
    onInventoryDrag(listener, event) {
        const player = event.getWhoClicked();
        if (this.shulkerBoxSlots[player.getUniqueId()]
            && this.isShulkerBox(event.getOldCursor().getType())) {
            if (this.setToArray(event.getRawSlots()).some(a => a < 27)
                || this.setToArray(event.getRawSlots()).length > 1) {
                event.setCancelled(true);
                return;
            }
            if (this.shulkerBoxOnCursors[player.getUniqueId()]) {
                this.shulkerBoxSlots[player.getUniqueId()] = this.toRawSlot(event.getInventorySlots().toArray()[0]);
                delete this.shulkerBoxOnCursors[player.getUniqueId()];
            }
        }
    }
    setToArray(set) {
        const n = set.size();
        const arr = [];
        for (let i = 0; i < n; i += 1) {
            arr.push(set[i]);
        }
        return arr;
    }
    saveShulkerBox(shulkerbox, items) {
        const bsm = shulkerbox.getItemMeta();
        const box = bsm.getBlockState();
        box.getInventory().setContents(items);
        bsm.setBlockState(box);
        shulkerbox.setItemMeta(bsm);
    }
    saveShulkerBoxByPlayer(player, items) {
        const shulkerbox = player
            .getInventory()
            .getItem(this.toSlot(this.shulkerBoxSlots[player.getUniqueId()]));
        if (shulkerbox === null || !this.isShulkerBox(shulkerbox.getType())) {
            return;
        }
        this.saveShulkerBox(shulkerbox, items);
    }
    isShulkerBox(m) {
        switch (m) {
            case Material_js_1.default.SHULKER_BOX:
            case Material_js_1.default.LIGHT_GRAY_SHULKER_BOX:
            case Material_js_1.default.BLACK_SHULKER_BOX:
            case Material_js_1.default.BLUE_SHULKER_BOX:
            case Material_js_1.default.BROWN_SHULKER_BOX:
            case Material_js_1.default.CYAN_SHULKER_BOX:
            case Material_js_1.default.GRAY_SHULKER_BOX:
            case Material_js_1.default.GREEN_SHULKER_BOX:
            case Material_js_1.default.LIGHT_BLUE_SHULKER_BOX:
            case Material_js_1.default.LIME_SHULKER_BOX:
            case Material_js_1.default.MAGENTA_SHULKER_BOX:
            case Material_js_1.default.ORANGE_SHULKER_BOX:
            case Material_js_1.default.PINK_SHULKER_BOX:
            case Material_js_1.default.PURPLE_SHULKER_BOX:
            case Material_js_1.default.RED_SHULKER_BOX:
            case Material_js_1.default.WHITE_SHULKER_BOX:
            case Material_js_1.default.YELLOW_SHULKER_BOX:
                return true;
            default:
                return false;
        }
    }
    isPlaceAction(action) {
        return (action === InventoryAction_js_1.default.PLACE_ALL
            || action === InventoryAction_js_1.default.PLACE_ONE
            || action === InventoryAction_js_1.default.PLACE_SOME
            || action === InventoryAction_js_1.default.SWAP_WITH_CURSOR);
    }
    isPickupAction(action) {
        return (action === InventoryAction_js_1.default.PICKUP_ALL
            || action === InventoryAction_js_1.default.PICKUP_HALF
            || action === InventoryAction_js_1.default.PICKUP_ONE
            || action === InventoryAction_js_1.default.PICKUP_SOME
            || action === InventoryAction_js_1.default.SWAP_WITH_CURSOR);
    }
    isInShulkerBox(rawSlot) {
        return rawSlot >= 0 && rawSlot < 27;
    }
    toRawSlot(slot) {
        return slot >= 0 && slot < 9 ? slot + 54 : slot + 18;
    }
    toSlot(rawSlot) {
        return rawSlot >= 54 ? rawSlot - 54 : rawSlot - 18;
    }
    moveItemToSlotRange(rangeMin, rangeMax, event) {
        for (let i = rangeMin; i < rangeMax; i += 1) {
            if (event.getClickedInventory().getItem(i) === null
                || event
                    .getClickedInventory()
                    .getItem(i)
                    .getType() === Material_js_1.default.AIR) {
                event.getClickedInventory().setItem(i, event.getCurrentItem());
                event.setCurrentItem(null);
                return this.toRawSlot(i);
            }
        }
        return null;
    }
    dropItem(itemStack, player) {
        const item = player.getWorld().dropItem(player.getEyeLocation(), itemStack);
        item.setVelocity(player
            .getLocation()
            .getDirection()
            .multiply(1 / 4));
        item.setPickupDelay(40);
    }
    debugLog(event) {
        if (config_js_1.Config.DEBUG) {
            console.log(event.getAction());
            console.log(`Cursor: [${Object.keys(this.shulkerBoxOnCursors).join(', ')}]`);
            console.log(`Open: [${Object.keys(this.shulkerBoxOpen).join(', ')}]`);
            console.log(`Slots: {${Array.from(Object.entries(this.shulkerBoxSlots))
                .map(e => `'${e[0]}': ${e[1]}`)
                .join(', ')}}`);
        }
    }
    isLeftClick(action) {
        return action === Action_js_1.default.LEFT_CLICK_BLOCK || action === Action_js_1.default.LEFT_CLICK_AIR;
    }
};
ShulkerPocket = __decorate([
    EventListener_js_1.Subscribe
], ShulkerPocket);
exports.default = ShulkerPocket;
