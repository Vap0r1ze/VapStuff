"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CraftingInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CraftingInventory');
    }
    static $isInstance(obj) {
        return obj instanceof CraftingInventory.$javaClass;
    }
}
exports.default = CraftingInventory;
