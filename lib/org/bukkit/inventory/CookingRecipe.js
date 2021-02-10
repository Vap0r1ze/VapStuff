"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CookingRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof CookingRecipe.$javaClass;
    }
    constructor(...args) {
        return new CookingRecipe.$javaClass(...args);
    }
}
exports.default = CookingRecipe;
