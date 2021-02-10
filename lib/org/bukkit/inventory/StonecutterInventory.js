"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StonecutterInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.StonecutterInventory');
    }
    static $isInstance(obj) {
        return obj instanceof StonecutterInventory.$javaClass;
    }
}
exports.default = StonecutterInventory;
