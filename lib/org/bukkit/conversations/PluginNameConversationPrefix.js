export default class PluginNameConversationPrefix {
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
