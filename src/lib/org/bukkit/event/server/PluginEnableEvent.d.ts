import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import PluginEvent from './PluginEvent.js';
export default interface PluginEnableEvent extends PluginEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlugin(): Plugin;
    isAsynchronous(): boolean;
}
export default class PluginEnableEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
    static getHandlerList(): HandlerList;
}
