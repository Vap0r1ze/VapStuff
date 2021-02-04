import ConversationContext from './ConversationContext.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import Prompt from './Prompt.js';
import ValidatingPrompt from './ValidatingPrompt.js';
export default interface PlayerNamePrompt extends ValidatingPrompt {
    acceptInput(context: ConversationContext, input: string): Prompt;
    blocksForInput(context: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
}
export default class PlayerNamePrompt {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
    static get END_OF_CONVERSATION(): Prompt;
}
