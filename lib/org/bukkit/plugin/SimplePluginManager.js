"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimplePluginManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.SimplePluginManager');
    }
    static $isInstance(obj) {
        return obj instanceof SimplePluginManager.$javaClass;
    }
    constructor(...args) {
        return new SimplePluginManager.$javaClass(...args);
    }
}
exports.default = SimplePluginManager;
