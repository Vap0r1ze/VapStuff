import ConversationContext from './ConversationContext.js';
import ConversationPrefix from './ConversationPrefix.js';
export default interface NullConversationPrefix extends ConversationPrefix {
    getPrefix(context: ConversationContext): string;
}
export default class NullConversationPrefix {
    static get $javaClass(): any;
    constructor();
}
