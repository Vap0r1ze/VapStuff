"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.ItemMeta');
    }
    static $isInstance(obj) {
        return obj instanceof ItemMeta.$javaClass;
    }
}
exports.default = ItemMeta;
