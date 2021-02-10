"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Listener {
    static get $javaClass() {
        return Java.type('org.bukkit.event.Listener');
    }
    static $isInstance(obj) {
        return obj instanceof Listener.$javaClass;
    }
}
exports.default = Listener;
