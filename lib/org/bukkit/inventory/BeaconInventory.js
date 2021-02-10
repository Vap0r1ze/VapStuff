"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BeaconInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BeaconInventory');
    }
    static $isInstance(obj) {
        return obj instanceof BeaconInventory.$javaClass;
    }
}
exports.default = BeaconInventory;
