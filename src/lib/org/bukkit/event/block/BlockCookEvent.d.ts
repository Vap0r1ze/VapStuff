import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface BlockCookEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getResult(): ItemStack;
    getSource(): ItemStack;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setResult(result: ItemStack): void;
}
export default class BlockCookEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}
