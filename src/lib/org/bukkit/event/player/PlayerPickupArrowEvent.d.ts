import AbstractArrow from '../../../../org/bukkit/entity/AbstractArrow.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Item from '../../../../org/bukkit/entity/Item.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerPickupItemEvent from './PlayerPickupItemEvent.js';
export default interface PlayerPickupArrowEvent extends PlayerPickupItemEvent {
    getArrow(): AbstractArrow;
    getEventName(): string;
    getHandlers(): HandlerList;
    getItem(): Item;
    getPlayer(): Player;
    getRemaining(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerPickupArrowEvent {
    static get $javaClass(): any;
    constructor(player: Player, item: Item, arrow: AbstractArrow);
    static getHandlerList(): HandlerList;
}
