"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlastingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BlastingRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof BlastingRecipe.$javaClass;
    }
    constructor(...args) {
        return new BlastingRecipe.$javaClass(...args);
    }
}
exports.default = BlastingRecipe;
