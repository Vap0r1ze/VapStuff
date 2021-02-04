import EventPriority from './EventPriority.js';
export default interface EventHandler {
    annotationType(): any;
    ignoreCancelled(): boolean;
    priority(): EventPriority;
}
export default class EventHandler {
    static get $javaClass(): any;
}
