import Conversation from './Conversation.js';
import ConversationContext from './ConversationContext.js';
export default interface ConversationCanceller {
    cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
    clone(): any;
    clone(): ConversationCanceller;
    setConversation(arg0: Conversation): void;
}
export default class ConversationCanceller {
    static get $javaClass(): any;
}
