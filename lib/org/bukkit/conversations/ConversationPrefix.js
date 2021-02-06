export default class ConversationPrefix {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationPrefix');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationPrefix.$javaClass;
    }
}
