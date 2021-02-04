import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerCommandPreprocessEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getMessage(): string;
    getPlayer(): Player;
    getRecipients(): any;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setMessage(command: string): void;
    setPlayer(player: Player): void;
}
export default class PlayerCommandPreprocessEvent {
    static get $javaClass(): any;
    constructor(player: Player, message: string);
    constructor(player: Player, message: string, recipients: any);
    static getHandlerList(): HandlerList;
}
