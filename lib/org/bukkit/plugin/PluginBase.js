export default class PluginBase {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginBase');
    }
    static $isInstance(obj) {
        return obj instanceof PluginBase.$javaClass;
    }
    constructor(...args) {
        return new PluginBase.$javaClass(...args);
    }
}
