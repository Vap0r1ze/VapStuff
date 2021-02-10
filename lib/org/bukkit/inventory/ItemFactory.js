"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemFactory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ItemFactory');
    }
    static $isInstance(obj) {
        return obj instanceof ItemFactory.$javaClass;
    }
}
exports.default = ItemFactory;
