"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.Recipe');
    }
    static $isInstance(obj) {
        return obj instanceof Recipe.$javaClass;
    }
}
exports.default = Recipe;