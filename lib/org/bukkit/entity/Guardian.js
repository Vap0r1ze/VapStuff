"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Guardian {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Guardian');
    }
    static $isInstance(obj) {
        return obj instanceof Guardian.$javaClass;
    }
}
exports.default = Guardian;
