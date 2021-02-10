"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RecipeChoice {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.RecipeChoice');
    }
    static $isInstance(obj) {
        return obj instanceof RecipeChoice.$javaClass;
    }
}
exports.default = RecipeChoice;
