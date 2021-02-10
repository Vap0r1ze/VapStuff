"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComplexRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ComplexRecipe');
    }
    static $isInstance(obj) {
        return obj instanceof ComplexRecipe.$javaClass;
    }
}
exports.default = ComplexRecipe;
