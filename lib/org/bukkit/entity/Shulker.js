"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shulker {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Shulker');
    }
    static $isInstance(obj) {
        return obj instanceof Shulker.$javaClass;
    }
}
exports.default = Shulker;
