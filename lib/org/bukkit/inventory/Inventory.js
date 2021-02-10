"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.Inventory');
    }
    static $isInstance(obj) {
        return obj instanceof Inventory.$javaClass;
    }
}
exports.default = Inventory;
