import Conversable from './Conversable.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface ConversationContext {
    getAllSessionData(): any;
    getForWhom(): Conversable;
    getPlugin(): Plugin;
    getSessionData(key: any): any;
    setSessionData(key: any, value: any): void;
}
export default class ConversationContext {
    static get $javaClass(): any;
    constructor(plugin: Plugin, forWhom: Conversable, initialSessionData: any);
}
