"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrewingStand {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.BrewingStand');
    }
    static $isInstance(obj) {
        return obj instanceof BrewingStand.$javaClass;
    }
}
exports.default = BrewingStand;
