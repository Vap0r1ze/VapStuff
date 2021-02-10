"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Damageable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Damageable');
    }
    static $isInstance(obj) {
        return obj instanceof Damageable.$javaClass;
    }
}
exports.default = Damageable;
