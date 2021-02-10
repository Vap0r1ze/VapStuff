"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Firework {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Firework');
    }
    static $isInstance(obj) {
        return obj instanceof Firework.$javaClass;
    }
}
exports.default = Firework;
