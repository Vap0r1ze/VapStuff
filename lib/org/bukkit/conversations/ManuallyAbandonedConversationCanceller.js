export default class ManuallyAbandonedConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ManuallyAbandonedConversationCanceller');
    }
    static $isInstance(obj) {
        return obj instanceof ManuallyAbandonedConversationCanceller.$javaClass;
    }
    constructor(...args) {
        return new ManuallyAbandonedConversationCanceller.$javaClass(...args);
    }
}
