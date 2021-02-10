"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmokingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.SmokingRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof SmokingRecipe.$javaClass;
    }
    constructor(...args) {
        return new SmokingRecipe.$javaClass(...args);
    }
}
exports.default = SmokingRecipe;
