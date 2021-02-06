export default class ChatPaginator$ChatPage {
    static get $javaClass() {
        return Java.type('org.bukkit.util.ChatPaginator$ChatPage');
    }
    static $isInstance(obj) {
        return obj instanceof ChatPaginator$ChatPage.$javaClass;
    }
    constructor(...args) {
        return new ChatPaginator$ChatPage.$javaClass(...args);
    }
}
