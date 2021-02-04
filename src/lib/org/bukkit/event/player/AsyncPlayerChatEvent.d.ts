import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface AsyncPlayerChatEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getFormat(): string;
    getHandlers(): HandlerList;
    getMessage(): string;
    getPlayer(): Player;
    getRecipients(): any;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFormat(format: string): void;
    setMessage(message: string): void;
}
export default class AsyncPlayerChatEvent {
    static get $javaClass(): any;
    constructor(async: boolean, who: Player, message: string, players: any);
    static getHandlerList(): HandlerList;
}
