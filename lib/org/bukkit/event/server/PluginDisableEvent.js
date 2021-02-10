"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginDisableEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.PluginDisableEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PluginDisableEvent.$javaClass;
    }
    constructor(...args) {
        return new PluginDisableEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PluginDisableEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PluginDisableEvent;
