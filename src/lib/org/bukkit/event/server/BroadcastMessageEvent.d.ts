import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from './ServerEvent.js';
export default interface BroadcastMessageEvent extends ServerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getMessage(): string;
    getRecipients(): any;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    setMessage(message: string): void;
}
export default class BroadcastMessageEvent {
    static get $javaClass(): any;
    constructor(message: string, recipients: any);
    constructor(isAsync: boolean, message: string, recipients: any);
    static getHandlerList(): HandlerList;
}
