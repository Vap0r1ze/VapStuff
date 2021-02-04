import Listener from './Listener.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import RegisteredListener from '../../../org/bukkit/plugin/RegisteredListener.js';
export default interface HandlerList {
    bake(): void;
    getRegisteredListeners(): Array<RegisteredListener>;
    register(listener: RegisteredListener): void;
    registerAll(listeners: Array<any>): void;
    unregister(listener: Listener): void;
    unregister(plugin: Plugin): void;
    unregister(listener: RegisteredListener): void;
}
export default class HandlerList {
    static get $javaClass(): any;
    constructor();
    static bakeAll(): void;
    static getHandlerLists(): any;
    static getRegisteredListeners(plugin: Plugin): any;
    static unregisterAll(): void;
    static unregisterAll(listener: Listener): void;
    static unregisterAll(plugin: Plugin): void;
}
