"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Directional {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Directional');
    }
    static $isInstance(obj) {
        return obj instanceof Directional.$javaClass;
    }
}
exports.default = Directional;
