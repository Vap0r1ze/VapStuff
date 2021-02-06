export default class ConversationAbandonedEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationAbandonedEvent.$javaClass;
    }
    constructor(...args) {
        return new ConversationAbandonedEvent.$javaClass(...args);
    }
}
