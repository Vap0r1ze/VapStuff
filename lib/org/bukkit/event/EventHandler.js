"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventHandler {
    static get $javaClass() {
        return Java.type('org.bukkit.event.EventHandler');
    }
    static $isInstance(obj) {
        return obj instanceof EventHandler.$javaClass;
    }
}
exports.default = EventHandler;
