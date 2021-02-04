import ChatPaginator$ChatPage from './ChatPaginator$ChatPage.js';
export default class ChatPaginator {
    static get $javaClass(): any;
    constructor();
    static get AVERAGE_CHAT_PAGE_WIDTH(): number;
    static get CLOSED_CHAT_PAGE_HEIGHT(): number;
    static get GUARANTEED_NO_WRAP_CHAT_PAGE_WIDTH(): number;
    static get OPEN_CHAT_PAGE_HEIGHT(): number;
    static get UNBOUNDED_PAGE_HEIGHT(): number;
    static get UNBOUNDED_PAGE_WIDTH(): number;
    static paginate(unpaginatedString: string, pageNumber: number): ChatPaginator$ChatPage;
    static paginate(unpaginatedString: string, pageNumber: number, lineLength: number, pageHeight: number): ChatPaginator$ChatPage;
    static wordWrap(rawString: string, lineLength: number): Array<string>;
}
