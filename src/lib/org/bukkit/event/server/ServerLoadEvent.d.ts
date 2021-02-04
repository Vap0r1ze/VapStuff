import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from './ServerEvent.js';
import ServerLoadEvent$LoadType from './ServerLoadEvent$LoadType.js';
export default interface ServerLoadEvent extends ServerEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getType(): ServerLoadEvent$LoadType;
    isAsynchronous(): boolean;
}
export default class ServerLoadEvent {
    static get $javaClass(): any;
    constructor(type: ServerLoadEvent$LoadType);
    static getHandlerList(): HandlerList;
}
