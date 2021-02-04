import ChatColor from '../../../org/bukkit/ChatColor.js';
import ConversationContext from './ConversationContext.js';
import ConversationPrefix from './ConversationPrefix.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PluginNameConversationPrefix extends ConversationPrefix {
    getPrefix(context: ConversationContext): string;
}
export default class PluginNameConversationPrefix {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
    constructor(plugin: Plugin, separator: string, prefixColor: ChatColor);
}
