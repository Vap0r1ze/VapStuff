"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ambient {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ambient');
    }
    static $isInstance(obj) {
        return obj instanceof Ambient.$javaClass;
    }
}
exports.default = Ambient;
