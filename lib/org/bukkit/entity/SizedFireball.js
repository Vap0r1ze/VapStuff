"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SizedFireball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SizedFireball');
    }
    static $isInstance(obj) {
        return obj instanceof SizedFireball.$javaClass;
    }
}
exports.default = SizedFireball;
