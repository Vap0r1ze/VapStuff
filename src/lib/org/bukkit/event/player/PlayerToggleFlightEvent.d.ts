import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerToggleFlightEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isFlying(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerToggleFlightEvent {
    static get $javaClass(): any;
    constructor(player: Player, isFlying: boolean);
    static getHandlerList(): HandlerList;
}
