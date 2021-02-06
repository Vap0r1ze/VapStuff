export default class PluginDescriptionFile {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginDescriptionFile');
    }
    static $isInstance(obj) {
        return obj instanceof PluginDescriptionFile.$javaClass;
    }
    constructor(...args) {
        return new PluginDescriptionFile.$javaClass(...args);
    }
}
