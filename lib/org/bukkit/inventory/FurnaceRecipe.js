"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FurnaceRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.FurnaceRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof FurnaceRecipe.$javaClass;
    }
    constructor(...args) {
        return new FurnaceRecipe.$javaClass(...args);
    }
}
exports.default = FurnaceRecipe;