import HandlerList from './HandlerList.js';
export default interface Event {
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
}
export default class Event {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
