import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerEvent from './ServerEvent.js';
export default interface ServerCommandEvent extends ServerEvent, Cancellable {
    getCommand(): string;
    getEventName(): string;
    getHandlers(): HandlerList;
    getSender(): CommandSender;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCommand(message: string): void;
}
export default class ServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}
