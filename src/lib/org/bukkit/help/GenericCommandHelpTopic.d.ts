import Command from '../../../org/bukkit/command/Command.js';
import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import HelpTopic from './HelpTopic.js';
export default interface GenericCommandHelpTopic extends HelpTopic {
    amendCanSee(amendedPermission: string): void;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
    canSee(sender: CommandSender): boolean;
    getFullText(forWho: CommandSender): string;
    getName(): string;
    getShortText(): string;
}
export default class GenericCommandHelpTopic {
    static get $javaClass(): any;
    constructor(command: Command);
}
