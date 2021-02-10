"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LeashHitch {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LeashHitch');
    }
    static $isInstance(obj) {
        return obj instanceof LeashHitch.$javaClass;
    }
}
exports.default = LeashHitch;
