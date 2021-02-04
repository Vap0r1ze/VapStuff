import ConversationContext from './ConversationContext.js';
export default interface Prompt {
    acceptInput(arg0: ConversationContext, arg1: string): Prompt;
    blocksForInput(arg0: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
}
export default class Prompt {
    static get $javaClass(): any;
    static get END_OF_CONVERSATION(): Prompt;
}
