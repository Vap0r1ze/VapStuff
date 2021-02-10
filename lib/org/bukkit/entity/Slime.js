"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Slime {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Slime');
    }
    static $isInstance(obj) {
        return obj instanceof Slime.$javaClass;
    }
}
exports.default = Slime;
