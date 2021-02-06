export default class ReservedChannelException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.ReservedChannelException');
    }
    static $isInstance(obj) {
        return obj instanceof ReservedChannelException.$javaClass;
    }
    constructor(...args) {
        return new ReservedChannelException.$javaClass(...args);
    }
}
