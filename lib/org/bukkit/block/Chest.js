"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Chest');
    }
    static $isInstance(obj) {
        return obj instanceof Chest.$javaClass;
    }
}
exports.default = Chest;
