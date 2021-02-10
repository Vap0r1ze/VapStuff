"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rabbit {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Rabbit');
    }
    static $isInstance(obj) {
        return obj instanceof Rabbit.$javaClass;
    }
}
exports.default = Rabbit;
