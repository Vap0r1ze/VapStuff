"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.PlayerInventory');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerInventory.$javaClass;
    }
}
exports.default = PlayerInventory;
