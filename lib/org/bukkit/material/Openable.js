"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Openable {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Openable');
    }
    static $isInstance(obj) {
        return obj instanceof Openable.$javaClass;
    }
}
exports.default = Openable;
