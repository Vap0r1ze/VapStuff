export default class ConversationAbandonedListener {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationAbandonedListener');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationAbandonedListener.$javaClass;
    }
}
