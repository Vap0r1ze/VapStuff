export default class ChatPaginator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.ChatPaginator');
    }
    static $isInstance(obj) {
        return obj instanceof ChatPaginator.$javaClass;
    }
    constructor(...args) {
        return new ChatPaginator.$javaClass(...args);
    }
    static get AVERAGE_CHAT_PAGE_WIDTH() {
        return ChatPaginator.$javaClass.AVERAGE_CHAT_PAGE_WIDTH;
    }
    static get CLOSED_CHAT_PAGE_HEIGHT() {
        return ChatPaginator.$javaClass.CLOSED_CHAT_PAGE_HEIGHT;
    }
    static get GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH() {
        return ChatPaginator.$javaClass.GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH;
    }
    static get OPEN_CHAT_PAGE_HEIGHT() {
        return ChatPaginator.$javaClass.OPEN_CHAT_PAGE_HEIGHT;
    }
    static get UNBOUNDED_PAGE_HEIGHT() {
        return ChatPaginator.$javaClass.UNBOUNDED_PAGE_HEIGHT;
    }
    static get UNBOUNDED_PAGE_WIDTH() {
        return ChatPaginator.$javaClass.UNBOUNDED_PAGE_WIDTH;
    }
    static paginate(...args) {
        return ChatPaginator.$javaClass.paginate(...args);
    }
    static wordWrap(...args) {
        return ChatPaginator.$javaClass.wordWrap(...args);
    }
}
