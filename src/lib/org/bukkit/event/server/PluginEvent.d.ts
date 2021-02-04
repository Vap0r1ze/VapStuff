import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Plugin from '../../../../org/bukkit/plugin/Plugin.js';
import ServerEvent from './ServerEvent.js';
export default interface PluginEvent extends ServerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlugin(): Plugin;
    isAsynchronous(): boolean;
}
export default class PluginEvent {
    static get $javaClass(): any;
    constructor(plugin: Plugin);
}
