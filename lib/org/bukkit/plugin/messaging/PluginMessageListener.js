export default class PluginMessageListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.PluginMessageListener');
    }
    static $isInstance(obj) {
        return obj instanceof PluginMessageListener.$javaClass;
    }
}
