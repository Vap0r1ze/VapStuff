"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blaze {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Blaze');
    }
    static $isInstance(obj) {
        return obj instanceof Blaze.$javaClass;
    }
}
exports.default = Blaze;
