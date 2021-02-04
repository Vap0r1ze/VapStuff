import Block from '../../../../org/bukkit/block/Block.js';
import BlockGrowEvent from './BlockGrowEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockFormEvent extends BlockGrowEvent {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewState(): BlockState;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BlockFormEvent {
    static get $javaClass(): any;
    constructor(block: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
