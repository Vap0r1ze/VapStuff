"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HorseInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.HorseInventory');
    }
    static $isInstance(obj) {
        return obj instanceof HorseInventory.$javaClass;
    }
}
exports.default = HorseInventory;
