"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Entity');
    }
    static $isInstance(obj) {
        return obj instanceof Entity.$javaClass;
    }
}
exports.default = Entity;
