"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemStack {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ItemStack');
    }
    static $isInstance(obj) {
        return obj instanceof ItemStack.$javaClass;
    }
    constructor(...args) {
        return new ItemStack.$javaClass(...args);
    }
    static deserialize(...args) {
        return ItemStack.$javaClass.deserialize(...args);
    }
}
exports.default = ItemStack;
