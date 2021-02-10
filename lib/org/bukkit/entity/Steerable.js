"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Steerable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Steerable');
    }
    static $isInstance(obj) {
        return obj instanceof Steerable.$javaClass;
    }
}
exports.default = Steerable;
