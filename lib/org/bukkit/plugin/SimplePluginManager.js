export default class SimplePluginManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.SimplePluginManager');
    }
    static $isInstance(obj) {
        return obj instanceof SimplePluginManager.$javaClass;
    }
    constructor(...args) {
        return new SimplePluginManager.$javaClass(...args);
    }
}
