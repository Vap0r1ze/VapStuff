export default class PluginMessageRecipient {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageRecipient');
    }
    static $isInstance(obj) {
        return obj instanceof PluginMessageRecipient.$javaClass;
    }
}
