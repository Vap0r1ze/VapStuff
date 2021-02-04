import CommandSender from '../../../../org/bukkit/command/CommandSender.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ServerCommandEvent from './ServerCommandEvent.js';
export default interface RemoteServerCommandEvent extends ServerCommandEvent {
    getCommand(): string;
    getEventName(): string;
    getHandlers(): HandlerList;
    getSender(): CommandSender;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCommand(message: string): void;
}
export default class RemoteServerCommandEvent {
    static get $javaClass(): any;
    constructor(sender: CommandSender, command: string);
    static getHandlerList(): HandlerList;
}
