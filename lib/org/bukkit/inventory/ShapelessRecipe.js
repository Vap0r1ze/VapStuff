"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShapelessRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ShapelessRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof ShapelessRecipe.$javaClass;
    }
    constructor(...args) {
        return new ShapelessRecipe.$javaClass(...args);
    }
}
exports.default = ShapelessRecipe;
