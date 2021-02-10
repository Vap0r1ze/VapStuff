"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractArrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractArrow');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractArrow.$javaClass;
    }
}
exports.default = AbstractArrow;
