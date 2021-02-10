"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animals {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Animals');
    }
    static $isInstance(obj) {
        return obj instanceof Animals.$javaClass;
    }
}
exports.default = Animals;
