"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StonecuttingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.StonecuttingRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof StonecuttingRecipe.$javaClass;
    }
    constructor(...args) {
        return new StonecuttingRecipe.$javaClass(...args);
    }
}
exports.default = StonecuttingRecipe;
