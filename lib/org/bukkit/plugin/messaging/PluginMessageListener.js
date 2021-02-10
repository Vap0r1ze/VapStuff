"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginMessageListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageListener');
    }
    static $isInstance(obj) {
        return obj instanceof PluginMessageListener.$javaClass;
    }
}
exports.default = PluginMessageListener;
