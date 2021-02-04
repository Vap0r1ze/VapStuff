import Conversation from './Conversation.js';
import ConversationCanceller from './ConversationCanceller.js';
import ConversationContext from './ConversationContext.js';
export default interface ManuallyAbandonedConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
    clone(): ConversationCanceller;
    clone(): any;
    setConversation(conversation: Conversation): void;
}
export default class ManuallyAbandonedConversationCanceller {
    static get $javaClass(): any;
    constructor();
}
