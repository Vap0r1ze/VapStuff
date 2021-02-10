"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapCanvas {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapCanvas');
    }
    static $isInstance(obj) {
        return obj instanceof MapCanvas.$javaClass;
    }
}
exports.default = MapCanvas;
