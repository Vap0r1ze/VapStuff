"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WaterMob {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WaterMob');
    }
    static $isInstance(obj) {
        return obj instanceof WaterMob.$javaClass;
    }
}
exports.default = WaterMob;
