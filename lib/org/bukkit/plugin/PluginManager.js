export default class PluginManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginManager');
    }
    static $isInstance(obj) {
        return obj instanceof PluginManager.$javaClass;
    }
}
