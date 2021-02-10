"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShulkerBullet {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ShulkerBullet');
    }
    static $isInstance(obj) {
        return obj instanceof ShulkerBullet.$javaClass;
    }
}
exports.default = ShulkerBullet;
