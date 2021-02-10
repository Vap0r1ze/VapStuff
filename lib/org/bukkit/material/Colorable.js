"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Colorable {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Colorable');
    }
    static $isInstance(obj) {
        return obj instanceof Colorable.$javaClass;
    }
}
exports.default = Colorable;
