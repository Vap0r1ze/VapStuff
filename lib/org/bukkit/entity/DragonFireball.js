"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DragonFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.DragonFireball');
    }
    static $isInstance(obj) {
        return obj instanceof DragonFireball.$javaClass;
    }
}
exports.default = DragonFireball;
