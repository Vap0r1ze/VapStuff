"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnsafeValues {
    static get $javaClass() {
        return Java.type('org.bukkit.UnsafeValues');
    }
    static $isInstance(obj) {
        return obj instanceof UnsafeValues.$javaClass;
    }
}
exports.default = UnsafeValues;
