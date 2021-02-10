"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ageable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ageable');
    }
    static $isInstance(obj) {
        return obj instanceof Ageable.$javaClass;
    }
}
exports.default = Ageable;
