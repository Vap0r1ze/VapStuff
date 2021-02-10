"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnvilInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.AnvilInventory');
    }
    static $isInstance(obj) {
        return obj instanceof AnvilInventory.$javaClass;
    }
}
exports.default = AnvilInventory;
