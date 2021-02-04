import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import ItemStack from '../../../../org/bukkit/inventory/ItemStack.js';
export default interface FurnaceBurnEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getBurnTime(): number;
    getEventName(): string;
    getFuel(): ItemStack;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isBurning(): boolean;
    isCancelled(): boolean;
    setBurnTime(burnTime: number): void;
    setBurning(burning: boolean): void;
    setCancelled(cancel: boolean): void;
}
export default class FurnaceBurnEvent {
    static get $javaClass(): any;
    constructor(furnace: Block, fuel: ItemStack, burnTime: number);
    static getHandlerList(): HandlerList;
}
