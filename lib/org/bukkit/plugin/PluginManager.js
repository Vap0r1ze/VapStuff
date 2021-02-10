"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginManager');
    }
    static $isInstance(obj) {
        return obj instanceof PluginManager.$javaClass;
    }
}
exports.default = PluginManager;
