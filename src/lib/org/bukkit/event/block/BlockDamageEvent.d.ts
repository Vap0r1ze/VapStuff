import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockDamageEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getInstaBreak(): boolean;
    getItemInHand(): ItemStack;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setInstaBreak(bool: boolean): void;
}
export default class BlockDamageEvent {
    static get $javaClass(): any;
    constructor(player: Player, block: Block, itemInHand: ItemStack, instaBreak: boolean);
    static getHandlerList(): HandlerList;
}
