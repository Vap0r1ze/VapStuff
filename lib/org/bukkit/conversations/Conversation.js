export default class Conversation {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversation');
    }
    static $isInstance(obj) {
        return obj instanceof Conversation.$javaClass;
    }
    constructor(...args) {
        return new Conversation.$javaClass(...args);
    }
}
