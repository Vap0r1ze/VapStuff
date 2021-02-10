"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrewerInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BrewerInventory');
    }
    static $isInstance(obj) {
        return obj instanceof BrewerInventory.$javaClass;
    }
}
exports.default = BrewerInventory;
