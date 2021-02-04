import ConversationContext from './ConversationContext.js';
import Prompt from './Prompt.js';
export default interface StringPrompt extends Prompt {
    acceptInput(arg0: ConversationContext, arg1: string): Prompt;
    blocksForInput(context: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
}
export default class StringPrompt {
    static get $javaClass(): any;
    constructor();
    static get END_OF_CONVERSATION(): Prompt;
}
