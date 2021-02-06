export default class ChannelNotRegisteredException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ChannelNotRegisteredException');
    }
    static $isInstance(obj) {
        return obj instanceof ChannelNotRegisteredException.$javaClass;
    }
    constructor(...args) {
        return new ChannelNotRegisteredException.$javaClass(...args);
    }
}
