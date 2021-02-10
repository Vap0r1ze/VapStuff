"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LargeFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LargeFireball');
    }
    static $isInstance(obj) {
        return obj instanceof LargeFireball.$javaClass;
    }
}
exports.default = LargeFireball;
