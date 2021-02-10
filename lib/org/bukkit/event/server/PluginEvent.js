"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.PluginEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PluginEvent.$javaClass;
    }
    constructor(...args) {
        return new PluginEvent.$javaClass(...args);
    }
}
exports.default = PluginEvent;
