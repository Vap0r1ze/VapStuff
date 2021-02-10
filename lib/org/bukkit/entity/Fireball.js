"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Fireball');
    }
    static $isInstance(obj) {
        return obj instanceof Fireball.$javaClass;
    }
}
exports.default = Fireball;
