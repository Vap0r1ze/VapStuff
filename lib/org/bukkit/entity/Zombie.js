"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Zombie {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Zombie');
    }
    static $isInstance(obj) {
        return obj instanceof Zombie.$javaClass;
    }
}
exports.default = Zombie;
