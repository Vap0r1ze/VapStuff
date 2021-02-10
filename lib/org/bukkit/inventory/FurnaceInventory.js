"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FurnaceInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.FurnaceInventory');
    }
    static $isInstance(obj) {
        return obj instanceof FurnaceInventory.$javaClass;
    }
}
exports.default = FurnaceInventory;
