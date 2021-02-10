"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tameable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Tameable');
    }
    static $isInstance(obj) {
        return obj instanceof Tameable.$javaClass;
    }
}
exports.default = Tameable;
