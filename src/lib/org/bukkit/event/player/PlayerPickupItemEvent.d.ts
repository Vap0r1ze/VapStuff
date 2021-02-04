import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerPickupItemEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getItem(): Item;
    getPlayer(): Player;
    getRemaining(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerPickupItemEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: Item, remaining: number);
    static getHandlerList(): HandlerList;
}
