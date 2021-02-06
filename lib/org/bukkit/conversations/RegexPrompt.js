export default class RegexPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.RegexPrompt');
    }
    static $isInstance(obj) {
        return obj instanceof RegexPrompt.$javaClass;
    }
    constructor(...args) {
        return new RegexPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return RegexPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
