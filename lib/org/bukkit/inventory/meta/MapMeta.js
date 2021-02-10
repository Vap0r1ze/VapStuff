"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.MapMeta');
    }
    static $isInstance(obj) {
        return obj instanceof MapMeta.$javaClass;
    }
}
exports.default = MapMeta;
