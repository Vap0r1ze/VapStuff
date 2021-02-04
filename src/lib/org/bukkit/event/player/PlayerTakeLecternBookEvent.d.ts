import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Lectern from '../../../../org/bukkit/block/Lectern.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerTakeLecternBookEvent extends PlayerEvent, Cancellable {
    getBook(): ItemStack;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLectern(): Lectern;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class PlayerTakeLecternBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, lectern: Lectern);
    static getHandlerList(): HandlerList;
}
