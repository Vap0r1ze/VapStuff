import ConversationContext from './ConversationContext.js';
import Prompt from './Prompt.js';
export default interface MessagePrompt extends Prompt {
    acceptInput(context: ConversationContext, input: string): Prompt;
    blocksForInput(context: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
}
export default class MessagePrompt {
    static get $javaClass(): any;
    constructor();
    static get END_OF_CONVERSATION(): Prompt;
}
