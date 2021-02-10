"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExplosiveMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.ExplosiveMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof ExplosiveMinecart.$javaClass;
    }
}
exports.default = ExplosiveMinecart;
