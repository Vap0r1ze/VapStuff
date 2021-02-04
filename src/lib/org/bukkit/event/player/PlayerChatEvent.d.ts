import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerChatEvent extends PlayerEvent, Cancellable {
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
    setPlayer(player: Player): void;
}
export default class PlayerChatEvent {
    static get $javaClass(): any;
    constructor(player: Player, message: string);
    constructor(player: Player, message: string, format: string, recipients: any);
    static getHandlerList(): HandlerList;
}
