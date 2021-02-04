import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isSneaking(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerToggleSneakEvent {
    static get $javaClass(): any;
    constructor(player: Player, isSneaking: boolean);
    static getHandlerList(): HandlerList;
}
