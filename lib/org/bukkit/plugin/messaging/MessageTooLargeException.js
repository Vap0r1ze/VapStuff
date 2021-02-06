export default class MessageTooLargeException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.MessageTooLargeException');
    }
    static $isInstance(obj) {
        return obj instanceof MessageTooLargeException.$javaClass;
    }
    constructor(...args) {
        return new MessageTooLargeException.$javaClass(...args);
    }
}
