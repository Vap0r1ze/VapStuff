var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Config } from './config.js';
import Bukkit from '../lib/org/bukkit/Bukkit.js';
import Action from '../lib/org/bukkit/event/block/Action.js';
import ClickType from '../lib/org/bukkit/event/inventory/ClickType.js';
import InventoryAction from '../lib/org/bukkit/event/inventory/InventoryAction.js';
import InventoryType from '../lib/org/bukkit/event/inventory/InventoryType.js';
import Material from '../lib/org/bukkit/Material.js';
import Sound from '../lib/org/bukkit/Sound.js';
import Module from './Module.js';
import { Subscribe } from './EventListener.js';
let ShulkerPocket = class ShulkerPocket extends Module {
    constructor() {
        super(...arguments);
        this.shulkerBoxSlots = {};
        this.shulkerBoxOpen = {};
        this.shulkerBoxOnCursors = {};
    }
    get name() { return 'Shulker Pocket'; }
    onPlayerInteract(listener, event) {
        const player = event.getPlayer();
        const itemInMainHand = player.getInventory().getItemInMainHand();
        if (event.getAction() === Action.RIGHT_CLICK_AIR
            && itemInMainHand != null
            && this.isShulkerBox(itemInMainHand.getType())
            && !this.shulkerBoxOpen[player.getUniqueId()]) {
            this.shulkerBoxOpen[player.getUniqueId()] = true;
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
            const inv = Bukkit.createInventory(null, InventoryType.SHULKER_BOX, title);
            inv.setContents(shulkerBox.getInventory().getContents());
            player.openInventory(inv);
            this.shulkerBoxSlots[player.getUniqueId()] = this.toRawSlot(player.getInventory().getHeldItemSlot());
            player
                .getWorld()
                .playSound(player.getLocation(), Sound.BLOCK_SHULKER_BOX_OPEN, 1, 1);
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
            if (this.shulkerBoxOpen[player.getUniqueId()]) {
                delete this.shulkerBoxOpen[player.getUniqueId()];
                player
                    .getWorld()
                    .playSound(player.getLocation(), Sound.BLOCK_SHULKER_BOX_CLOSE, 1, 1);
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
                if (event.getAction() === InventoryAction.DROP_ALL_SLOT
                    || event.getAction() === InventoryAction.DROP_ONE_SLOT) {
                    this.dropItem(event.getCurrentItem(), player);
                    event.setCurrentItem(null);
                    player.closeInventory();
                    return;
                }
            }
            let newItemSlot;
            if (this.shulkerBoxOnCursors[player.getUniqueId()]) {
                if (event.getAction() === InventoryAction.DROP_ALL_CURSOR
                    || event.getAction() === InventoryAction.DROP_ONE_CURSOR) {
                    player.closeInventory();
                    return;
                }
                if (this.isPlaceAction(event.getAction())) {
                    newItemSlot = event.getRawSlot();
                    delete this.shulkerBoxOnCursors[player.getUniqueId()];
                }
            }
            if (event.getClick() === ClickType.NUMBER_KEY
                && (event.getAction() === InventoryAction.HOTBAR_SWAP
                    || event.getAction() === InventoryAction.HOTBAR_MOVE_AND_READD)) {
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
            if (event.getAction() === InventoryAction.MOVE_TO_OTHER_INVENTORY
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
            case Material.SHULKER_BOX:
            case Material.LIGHT_GRAY_SHULKER_BOX:
            case Material.BLACK_SHULKER_BOX:
            case Material.BLUE_SHULKER_BOX:
            case Material.BROWN_SHULKER_BOX:
            case Material.CYAN_SHULKER_BOX:
            case Material.GRAY_SHULKER_BOX:
            case Material.GREEN_SHULKER_BOX:
            case Material.LIGHT_BLUE_SHULKER_BOX:
            case Material.LIME_SHULKER_BOX:
            case Material.MAGENTA_SHULKER_BOX:
            case Material.ORANGE_SHULKER_BOX:
            case Material.PINK_SHULKER_BOX:
            case Material.PURPLE_SHULKER_BOX:
            case Material.RED_SHULKER_BOX:
            case Material.WHITE_SHULKER_BOX:
            case Material.YELLOW_SHULKER_BOX:
                return true;
            default:
                return false;
        }
    }
    isPlaceAction(action) {
        return (action === InventoryAction.PLACE_ALL
            || action === InventoryAction.PLACE_ONE
            || action === InventoryAction.PLACE_SOME
            || action === InventoryAction.SWAP_WITH_CURSOR);
    }
    isPickupAction(action) {
        return (action === InventoryAction.PICKUP_ALL
            || action === InventoryAction.PICKUP_HALF
            || action === InventoryAction.PICKUP_ONE
            || action === InventoryAction.PICKUP_SOME
            || action === InventoryAction.SWAP_WITH_CURSOR);
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
                    .getType() === Material.AIR) {
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
        if (Config.DEBUG) {
            console.log(event.getAction());
            console.log(`Cursor: [${Object.keys(this.shulkerBoxOnCursors).join(', ')}]`);
            console.log(`Open: [${Object.keys(this.shulkerBoxOpen).join(', ')}]`);
            console.log(`Slots: {${Array.from(Object.entries(this.shulkerBoxSlots))
                .map(e => `'${e[0]}': ${e[1]}`)
                .join(', ')}}`);
        }
    }
};
ShulkerPocket = __decorate([
    Subscribe
], ShulkerPocket);
export default ShulkerPocket;
