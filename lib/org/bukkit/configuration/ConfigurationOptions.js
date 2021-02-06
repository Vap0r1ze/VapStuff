export default class ConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.ConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof ConfigurationOptions.$javaClass;
    }
}
