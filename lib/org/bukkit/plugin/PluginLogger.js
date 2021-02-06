export default class PluginLogger {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginLogger');
    }
    static $isInstance(obj) {
        return obj instanceof PluginLogger.$javaClass;
    }
    constructor(...args) {
        return new PluginLogger.$javaClass(...args);
    }
    static get GLOBAL_LOGGER_NAME() {
        return PluginLogger.$javaClass.GLOBAL_LOGGER_NAME;
    }
    static get global() {
        return PluginLogger.$javaClass.global;
    }
    static getAnonymousLogger(...args) {
        return PluginLogger.$javaClass.getAnonymousLogger(...args);
    }
    static getGlobal(...args) {
        return PluginLogger.$javaClass.getGlobal(...args);
    }
    static getLogger(...args) {
        return PluginLogger.$javaClass.getLogger(...args);
    }
}
