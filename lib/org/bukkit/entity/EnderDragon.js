"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderDragon {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderDragon');
    }
    static $isInstance(obj) {
        return obj instanceof EnderDragon.$javaClass;
    }
}
exports.default = EnderDragon;
