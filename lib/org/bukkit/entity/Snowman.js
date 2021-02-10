"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snowman {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Snowman');
    }
    static $isInstance(obj) {
        return obj instanceof Snowman.$javaClass;
    }
}
exports.default = Snowman;
