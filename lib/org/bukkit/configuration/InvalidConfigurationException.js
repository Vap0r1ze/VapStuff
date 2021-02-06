export default class InvalidConfigurationException {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.InvalidConfigurationException');
    }
    static $isInstance(obj) {
        return obj instanceof InvalidConfigurationException.$javaClass;
    }
    constructor(...args) {
        return new InvalidConfigurationException.$javaClass(...args);
    }
}
