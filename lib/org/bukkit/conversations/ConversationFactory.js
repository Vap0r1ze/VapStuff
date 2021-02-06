export default class ConversationFactory {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationFactory');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationFactory.$javaClass;
    }
    constructor(...args) {
        return new ConversationFactory.$javaClass(...args);
    }
}
