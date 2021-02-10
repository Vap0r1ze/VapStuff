"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Creature {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Creature');
    }
    static $isInstance(obj) {
        return obj instanceof Creature.$javaClass;
    }
}
exports.default = Creature;
