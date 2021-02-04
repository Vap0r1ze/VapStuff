import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import PlayerEvent from './PlayerEvent.js';
export default interface PlayerItemBreakEvent extends PlayerEvent {
    getBrokenItem(): ItemStack;
    getEventName(): string;
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isAsynchronous(): boolean;
}
export default class PlayerItemBreakEvent {
    static get $javaClass(): any;
    constructor(player: Player, brokenItem: ItemStack);
    static getHandlerList(): HandlerList;
}
