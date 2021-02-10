"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapRenderer {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapRenderer');
    }
    static $isInstance(obj) {
        return obj instanceof MapRenderer.$javaClass;
    }
    constructor(...args) {
        return new MapRenderer.$javaClass(...args);
    }
}
exports.default = MapRenderer;
