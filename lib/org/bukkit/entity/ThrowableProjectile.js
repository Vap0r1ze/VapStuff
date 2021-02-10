"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThrowableProjectile {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ThrowableProjectile');
    }
    static $isInstance(obj) {
        return obj instanceof ThrowableProjectile.$javaClass;
    }
}
exports.default = ThrowableProjectile;
