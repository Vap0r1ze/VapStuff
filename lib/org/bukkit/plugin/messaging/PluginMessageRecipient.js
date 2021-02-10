"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginMessageRecipient {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageRecipient');
    }
    static $isInstance(obj) {
        return obj instanceof PluginMessageRecipient.$javaClass;
    }
}
exports.default = PluginMessageRecipient;
