import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerItemDamageEvent extends PlayerEvent, Cancellable {
    getDamage(): number;
    getEventName(): string;
    getHandlers(): HandlerList;
    getItem(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setDamage(damage: number): void;
}
export default class PlayerItemDamageEvent {
    static get $javaClass(): any;
    constructor(player: Player, what: ItemStack, damage: number);
    static getHandlerList(): HandlerList;
}
