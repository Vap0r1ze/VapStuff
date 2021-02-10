"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoubleChestInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.DoubleChestInventory');
    }
    static $isInstance(obj) {
        return obj instanceof DoubleChestInventory.$javaClass;
    }
}
exports.default = DoubleChestInventory;
