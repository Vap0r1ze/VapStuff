"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginAwareness {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginAwareness');
    }
    static $isInstance(obj) {
        return obj instanceof PluginAwareness.$javaClass;
    }
}
exports.default = PluginAwareness;
