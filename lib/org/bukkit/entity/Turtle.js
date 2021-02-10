"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Turtle {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Turtle');
    }
    static $isInstance(obj) {
        return obj instanceof Turtle.$javaClass;
    }
}
exports.default = Turtle;
