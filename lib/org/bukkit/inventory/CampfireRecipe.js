"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CampfireRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CampfireRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof CampfireRecipe.$javaClass;
    }
    constructor(...args) {
        return new CampfireRecipe.$javaClass(...args);
    }
}
exports.default = CampfireRecipe;
