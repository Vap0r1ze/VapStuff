export default class FixedSetPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.FixedSetPrompt');
    }
    static $isInstance(obj) {
        return obj instanceof FixedSetPrompt.$javaClass;
    }
    constructor(...args) {
        return new FixedSetPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return FixedSetPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
