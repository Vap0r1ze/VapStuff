"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemFlag {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ItemFlag');
    }
    static $isInstance(obj) {
        return obj instanceof ItemFlag.$javaClass;
    }
    static get HIDE_ATTRIBUTES() {
        return this.$javaClass.HIDE_ATTRIBUTES;
    }
    static get HIDE_DESTROYS() {
        return this.$javaClass.HIDE_DESTROYS;
    }
    static get HIDE_DYE() {
        return this.$javaClass.HIDE_DYE;
    }
    static get HIDE_ENCHANTS() {
        return this.$javaClass.HIDE_ENCHANTS;
    }
    static get HIDE_PLACED_ON() {
        return this.$javaClass.HIDE_PLACED_ON;
    }
    static get HIDE_POTION_EFFECTS() {
        return this.$javaClass.HIDE_POTION_EFFECTS;
    }
    static get HIDE_UNBREAKABLE() {
        return this.$javaClass.HIDE_UNBREAKABLE;
    }
}
exports.default = ItemFlag;
