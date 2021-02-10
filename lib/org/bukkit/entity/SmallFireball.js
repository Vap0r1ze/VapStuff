"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmallFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SmallFireball');
    }
    static $isInstance(obj) {
        return obj instanceof SmallFireball.$javaClass;
    }
}
exports.default = SmallFireball;
