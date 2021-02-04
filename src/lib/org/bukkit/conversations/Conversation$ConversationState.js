export default class Conversation$ConversationState {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversation$ConversationState');
    }
    static get ABANDONED() {
        return this.$javaClass.ABANDONED;
    }
    static get STARTED() {
        return this.$javaClass.STARTED;
    }
    static get UNSTARTED() {
        return this.$javaClass.UNSTARTED;
    }
}
