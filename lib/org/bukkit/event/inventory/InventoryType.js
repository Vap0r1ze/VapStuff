"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryType');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryType.$javaClass;
    }
    static get ANVIL() {
        return this.$javaClass.ANVIL;
    }
    static get BARREL() {
        return this.$javaClass.BARREL;
    }
    static get BEACON() {
        return this.$javaClass.BEACON;
    }
    static get BLAST_FURNACE() {
        return this.$javaClass.BLAST_FURNACE;
    }
    static get BREWING() {
        return this.$javaClass.BREWING;
    }
    static get CARTOGRAPHY() {
        return this.$javaClass.CARTOGRAPHY;
    }
    static get CHEST() {
        return this.$javaClass.CHEST;
    }
    static get CRAFTING() {
        return this.$javaClass.CRAFTING;
    }
    static get CREATIVE() {
        return this.$javaClass.CREATIVE;
    }
    static get DISPENSER() {
        return this.$javaClass.DISPENSER;
    }
    static get DROPPER() {
        return this.$javaClass.DROPPER;
    }
    static get ENCHANTING() {
        return this.$javaClass.ENCHANTING;
    }
    static get ENDER_CHEST() {
        return this.$javaClass.ENDER_CHEST;
    }
    static get FURNACE() {
        return this.$javaClass.FURNACE;
    }
    static get GRINDSTONE() {
        return this.$javaClass.GRINDSTONE;
    }
    static get HOPPER() {
        return this.$javaClass.HOPPER;
    }
    static get LECTERN() {
        return this.$javaClass.LECTERN;
    }
    static get LOOM() {
        return this.$javaClass.LOOM;
    }
    static get MERCHANT() {
        return this.$javaClass.MERCHANT;
    }
    static get PLAYER() {
        return this.$javaClass.PLAYER;
    }
    static get SHULKER_BOX() {
        return this.$javaClass.SHULKER_BOX;
    }
    static get SMITHING() {
        return this.$javaClass.SMITHING;
    }
    static get SMOKER() {
        return this.$javaClass.SMOKER;
    }
    static get STONECUTTER() {
        return this.$javaClass.STONECUTTER;
    }
    static get WORKBENCH() {
        return this.$javaClass.WORKBENCH;
    }
}
exports.default = InventoryType;
