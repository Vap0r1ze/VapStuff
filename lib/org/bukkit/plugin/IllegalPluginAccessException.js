"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IllegalPluginAccessException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.IllegalPluginAccessException');
    }
    static $isInstance(obj) {
        return obj instanceof IllegalPluginAccessException.$javaClass;
    }
    constructor(...args) {
        return new IllegalPluginAccessException.$javaClass(...args);
    }
}
exports.default = IllegalPluginAccessException;
