import BookMeta from '../../../../org/bukkit/inventory/meta/BookMeta.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerEditBookEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewBookMeta(): BookMeta;
    getPlayer(): Player;
    getPreviousBookMeta(): BookMeta;
    getSlot(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isSigning(): boolean;
    setCancelled(cancel: boolean): void;
    setNewBookMeta(newBookMeta: BookMeta): void;
    setSigning(signing: boolean): void;
}
export default class PlayerEditBookEvent {
    static get $javaClass(): any;
    constructor(who: Player, slot: number, previousBookMeta: BookMeta, newBookMeta: BookMeta, isSigning: boolean);
    static getHandlerList(): HandlerList;
}
