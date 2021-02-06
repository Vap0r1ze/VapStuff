export default class ChannelNameTooLongException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ChannelNameTooLongException');
    }
    static $isInstance(obj) {
        return obj instanceof ChannelNameTooLongException.$javaClass;
    }
    constructor(...args) {
        return new ChannelNameTooLongException.$javaClass(...args);
    }
}
