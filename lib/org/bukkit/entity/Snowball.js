"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snowball {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Snowball');
    }
    static $isInstance(obj) {
        return obj instanceof Snowball.$javaClass;
    }
}
exports.default = Snowball;
