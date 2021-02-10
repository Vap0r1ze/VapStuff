"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WitherSkull {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WitherSkull');
    }
    static $isInstance(obj) {
        return obj instanceof WitherSkull.$javaClass;
    }
}
exports.default = WitherSkull;
