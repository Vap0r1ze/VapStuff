import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerSwapHandItemsEvent extends PlayerEvent, Cancellable {
    getEventName(): string;
    getHandlers(): HandlerList;
    getMainHandItem(): ItemStack;
    getOffHandItem(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setMainHandItem(mainHandItem: ItemStack): void;
    setOffHandItem(offHandItem: ItemStack): void;
}
export default class PlayerSwapHandItemsEvent {
    static get $javaClass(): any;
    constructor(player: Player, mainHandItem: ItemStack, offHandItem: ItemStack);
    static getHandlerList(): HandlerList;
}
