"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Projectile {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Projectile');
    }
    static $isInstance(obj) {
        return obj instanceof Projectile.$javaClass;
    }
}
exports.default = Projectile;
