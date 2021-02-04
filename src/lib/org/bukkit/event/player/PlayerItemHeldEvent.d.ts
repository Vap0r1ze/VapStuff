import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerItemHeldEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewSlot(): number;
    getPlayer(): Player;
    getPreviousSlot(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerItemHeldEvent {
    static get $javaClass(): any;
    constructor(player: Player, previous: number, current: number);
    static getHandlerList(): HandlerList;
}
