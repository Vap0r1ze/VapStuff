"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TippedArrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.TippedArrow');
    }
    static $isInstance(obj) {
        return obj instanceof TippedArrow.$javaClass;
    }
}
exports.default = TippedArrow;
