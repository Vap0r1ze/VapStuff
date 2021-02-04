import ConversationContext from './ConversationContext.js';
import Prompt from './Prompt.js';
import ValidatingPrompt from './ValidatingPrompt.js';
export default interface RegexPrompt extends ValidatingPrompt {
    acceptInput(context: ConversationContext, input: string): Prompt;
    blocksForInput(context: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
}
export default class RegexPrompt {
    static get $javaClass(): any;
    constructor(regex: string);
    constructor(pattern: any);
    static get END_OF_CONVERSATION(): Prompt;
}
