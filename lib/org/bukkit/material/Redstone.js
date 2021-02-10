"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Redstone {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Redstone');
    }
    static $isInstance(obj) {
        return obj instanceof Redstone.$javaClass;
    }
}
exports.default = Redstone;
