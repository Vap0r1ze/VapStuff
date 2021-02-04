import Conversation from './Conversation.js';
import ConversationCanceller from './ConversationCanceller.js';
import ConversationContext from './ConversationContext.js';
export default interface ExactMatchConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
    clone(): ConversationCanceller;
    clone(): any;
    setConversation(conversation: Conversation): void;
}
export default class ExactMatchConversationCanceller {
    static get $javaClass(): any;
    constructor(escapeSequence: string);
}
