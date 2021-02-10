"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginEnableEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.PluginEnableEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PluginEnableEvent.$javaClass;
    }
    constructor(...args) {
        return new PluginEnableEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PluginEnableEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PluginEnableEvent;
