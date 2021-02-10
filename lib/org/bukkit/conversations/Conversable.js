"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conversable {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversable');
    }
    static $isInstance(obj) {
        return obj instanceof Conversable.$javaClass;
    }
}
exports.default = Conversable;
