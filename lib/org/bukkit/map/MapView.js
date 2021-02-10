"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapView {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapView');
    }
    static $isInstance(obj) {
        return obj instanceof MapView.$javaClass;
    }
}
exports.default = MapView;
