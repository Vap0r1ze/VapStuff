import ConversationAbandonedEvent from './ConversationAbandonedEvent.js';
export default interface ConversationAbandonedListener {
    conversationAbandoned(arg0: ConversationAbandonedEvent): void;
}
export default class ConversationAbandonedListener {
    static get $javaClass(): any;
}
