export default class TimedRegisteredListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.TimedRegisteredListener');
    }
    static $isInstance(obj) {
        return obj instanceof TimedRegisteredListener.$javaClass;
    }
    constructor(...args) {
        return new TimedRegisteredListener.$javaClass(...args);
    }
}
