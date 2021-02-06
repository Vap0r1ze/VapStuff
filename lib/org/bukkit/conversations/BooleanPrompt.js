export default class BooleanPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.BooleanPrompt');
    }
    static $isInstance(obj) {
        return obj instanceof BooleanPrompt.$javaClass;
    }
    constructor(...args) {
        return new BooleanPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return BooleanPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
