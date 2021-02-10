"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Nameable {
    static get $javaClass() {
        return Java.type('org.bukkit.Nameable');
    }
    static $isInstance(obj) {
        return obj instanceof Nameable.$javaClass;
    }
}
exports.default = Nameable;
