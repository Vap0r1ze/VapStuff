export default class IllegalPluginAccessException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.IllegalPluginAccessException');
    }
    static $isInstance(obj) {
        return obj instanceof IllegalPluginAccessException.$javaClass;
    }
    constructor(...args) {
        return new IllegalPluginAccessException.$javaClass(...args);
    }
}
