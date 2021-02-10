"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventExecutor {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.EventExecutor');
    }
    static $isInstance(obj) {
        return obj instanceof EventExecutor.$javaClass;
    }
}
exports.default = EventExecutor;
