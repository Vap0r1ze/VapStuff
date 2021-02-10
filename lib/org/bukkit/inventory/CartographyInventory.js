"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartographyInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CartographyInventory');
    }
    static $isInstance(obj) {
        return obj instanceof CartographyInventory.$javaClass;
    }
}
exports.default = CartographyInventory;
