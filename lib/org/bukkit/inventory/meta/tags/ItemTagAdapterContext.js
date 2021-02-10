"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemTagAdapterContext {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.tags.ItemTagAdapterContext');
    }
    static $isInstance(obj) {
        return obj instanceof ItemTagAdapterContext.$javaClass;
    }
}
exports.default = ItemTagAdapterContext;
