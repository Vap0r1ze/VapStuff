"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShapedRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ShapedRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof ShapedRecipe.$javaClass;
    }
    constructor(...args) {
        return new ShapedRecipe.$javaClass(...args);
    }
}
exports.default = ShapedRecipe;