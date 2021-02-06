export default class InvalidDescriptionException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.InvalidDescriptionException');
    }
    static $isInstance(obj) {
        return obj instanceof InvalidDescriptionException.$javaClass;
    }
    constructor(...args) {
        return new InvalidDescriptionException.$javaClass(...args);
    }
}
