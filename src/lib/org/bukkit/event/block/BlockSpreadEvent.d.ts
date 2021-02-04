import Block from '../../../../org/bukkit/block/Block.js';
import BlockFormEvent from './BlockFormEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockSpreadEvent extends BlockFormEvent {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewState(): BlockState;
    getSource(): Block;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BlockSpreadEvent {
    static get $javaClass(): any;
    constructor(block: Block, source: Block, newState: BlockState);
    static getHandlerList(): HandlerList;
}
