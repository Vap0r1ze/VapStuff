import Conversation from './Conversation.js';
import ConversationCanceller from './ConversationCanceller.js';
import ConversationContext from './ConversationContext.js';
export default interface ConversationAbandonedEvent {
    getCanceller(): ConversationCanceller;
    getContext(): ConversationContext;
    getSource(): any;
    gracefulExit(): boolean;
}
export default class ConversationAbandonedEvent {
    static get $javaClass(): any;
    constructor(conversation: Conversation);
    constructor(conversation: Conversation, canceller: ConversationCanceller);
}
