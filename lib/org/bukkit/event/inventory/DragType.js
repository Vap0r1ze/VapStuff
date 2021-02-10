"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DragType {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.DragType');
    }
    static $isInstance(obj) {
        return obj instanceof DragType.$javaClass;
    }
    static get EVEN() {
        return this.$javaClass.EVEN;
    }
    static get SINGLE() {
        return this.$javaClass.SINGLE;
    }
}
exports.default = DragType;
