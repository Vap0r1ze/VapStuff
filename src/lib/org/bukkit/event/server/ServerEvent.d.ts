import Event from '../../../../org/bukkit/event/Event.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface ServerEvent extends Event {
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
}
export default class ServerEvent {
    static get $javaClass(): any;
    constructor();
    constructor(isAsync: boolean);
}
