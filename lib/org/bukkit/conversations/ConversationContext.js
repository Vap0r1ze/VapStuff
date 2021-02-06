export default class ConversationContext {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationContext');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationContext.$javaClass;
    }
    constructor(...args) {
        return new ConversationContext.$javaClass(...args);
    }
}
