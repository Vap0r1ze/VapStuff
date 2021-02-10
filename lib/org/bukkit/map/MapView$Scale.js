"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapView$Scale {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MapView$Scale');
    }
    static $isInstance(obj) {
        return obj instanceof MapView$Scale.$javaClass;
    }
    static get CLOSE() {
        return this.$javaClass.CLOSE;
    }
    static get CLOSEST() {
        return this.$javaClass.CLOSEST;
    }
    static get FAR() {
        return this.$javaClass.FAR;
    }
    static get FARTHEST() {
        return this.$javaClass.FARTHEST;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
}
exports.default = MapView$Scale;
