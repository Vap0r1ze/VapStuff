export default class PluginLoader {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginLoader');
    }
    static $isInstance(obj) {
        return obj instanceof PluginLoader.$javaClass;
    }
}
