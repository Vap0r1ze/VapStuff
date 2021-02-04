import CommandSender from '../../../org/bukkit/command/CommandSender.js';
import HelpTopic from './HelpTopic.js';
export default interface IndexHelpTopic extends HelpTopic {
    amendCanSee(amendedPermission: string): void;
    amendTopic(amendedShortText: string, amendedFullText: string): void;
    canSee(sender: CommandSender): boolean;
    getFullText(sender: CommandSender): string;
    getName(): string;
    getShortText(): string;
}
export default class IndexHelpTopic {
    static get $javaClass(): any;
    constructor(_name: string, shortText: string, permission: string, topics: Array<any>);
    constructor(_name: string, shortText: string, permission: string, topics: Array<any>, preamble: string);
}
