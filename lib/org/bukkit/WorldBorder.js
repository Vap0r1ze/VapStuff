"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorldBorder {
    static get $javaClass() {
        return Java.type('org.bukkit.WorldBorder');
    }
    static $isInstance(obj) {
        return obj instanceof WorldBorder.$javaClass;
    }
}
exports.default = WorldBorder;
