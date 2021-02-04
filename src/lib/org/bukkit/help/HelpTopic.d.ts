import CommandSender from '../../../org/bukkit/command/CommandSender.js';
export default interface HelpTopic {
    amendCanSee(amendedPermission: string): void;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
    canSee(arg0: CommandSender): boolean;
    getFullText(forWho: CommandSender): string;
    getName(): string;
    getShortText(): string;
}
export default class HelpTopic {
    static get $javaClass(): any;
    constructor();
}
