"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginNameConversationPrefix {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.PluginNameConversationPrefix');
    }
    static $isInstance(obj) {
        return obj instanceof PluginNameConversationPrefix.$javaClass;
    }
    constructor(...args) {
        return new PluginNameConversationPrefix.$javaClass(...args);
    }
}
exports.default = PluginNameConversationPrefix;
