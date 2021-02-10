"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GrindstoneInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.GrindstoneInventory');
    }
    static $isInstance(obj) {
        return obj instanceof GrindstoneInventory.$javaClass;
    }
}
exports.default = GrindstoneInventory;
