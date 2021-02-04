import Event from '../../../org/bukkit/event/Event.js';
import EventExecutor from './EventExecutor.js';
import EventPriority from '../../../org/bukkit/event/EventPriority.js';
import Listener from '../../../org/bukkit/event/Listener.js';
import Plugin from './Plugin.js';
export default interface RegisteredListener {
    callEvent(event: Event): void;
    getListener(): Listener;
    getPlugin(): Plugin;
    getPriority(): EventPriority;
    isIgnoringCancelled(): boolean;
}
export default class RegisteredListener {
    static get $javaClass(): any;
    constructor(listener: Listener, executor: EventExecutor, priority: EventPriority, plugin: Plugin, ignoreCancelled: boolean);
}
