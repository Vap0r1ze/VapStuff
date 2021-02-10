"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderCrystal {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderCrystal');
    }
    static $isInstance(obj) {
        return obj instanceof EnderCrystal.$javaClass;
    }
}
exports.default = EnderCrystal;
