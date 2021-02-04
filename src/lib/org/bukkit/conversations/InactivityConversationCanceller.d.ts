import Conversation from './Conversation.js';
import ConversationCanceller from './ConversationCanceller.js';
import ConversationContext from './ConversationContext.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface InactivityConversationCanceller extends ConversationCanceller {
    cancelBasedOnInput(context: ConversationContext, input: string): boolean;
    clone(): ConversationCanceller;
    clone(): any;
    setConversation(conversation: Conversation): void;
}
export default class InactivityConversationCanceller {
    static get $javaClass(): any;
    constructor(plugin: Plugin, timeoutSeconds: number);
}
