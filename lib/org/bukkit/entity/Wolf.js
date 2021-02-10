"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wolf {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Wolf');
    }
    static $isInstance(obj) {
        return obj instanceof Wolf.$javaClass;
    }
}
exports.default = Wolf;
