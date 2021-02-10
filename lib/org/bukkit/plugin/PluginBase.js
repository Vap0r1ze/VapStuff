"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginBase {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginBase');
    }
    static $isInstance(obj) {
        return obj instanceof PluginBase.$javaClass;
    }
    constructor(...args) {
        return new PluginBase.$javaClass(...args);
    }
}
exports.default = PluginBase;
