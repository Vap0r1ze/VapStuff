import Block from '../../../../org/bukkit/block/Block.js';
import BlockCookEvent from '../../../../org/bukkit/event/block/BlockCookEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface FurnaceSmeltEvent extends BlockCookEvent {
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
export default class FurnaceSmeltEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, source: ItemStack, result: ItemStack);
    static getHandlerList(): HandlerList;
}
