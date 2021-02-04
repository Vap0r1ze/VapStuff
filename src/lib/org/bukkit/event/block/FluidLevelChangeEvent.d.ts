import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface FluidLevelChangeEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewData(): BlockData;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    setNewData(newData: BlockData): void;
}
export default class FluidLevelChangeEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, newData: BlockData);
    static getHandlerList(): HandlerList;
}
