export default class InvalidPluginException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.InvalidPluginException');
    }
    static $isInstance(obj) {
        return obj instanceof InvalidPluginException.$javaClass;
    }
    constructor(...args) {
        return new InvalidPluginException.$javaClass(...args);
    }
}
