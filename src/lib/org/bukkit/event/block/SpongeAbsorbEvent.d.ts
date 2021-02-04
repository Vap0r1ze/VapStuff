import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface SpongeAbsorbEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getBlocks(): Array<BlockState>;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class SpongeAbsorbEvent {
    static get $javaClass(): any;
    constructor(block: Block, waterblocks: Array<any>);
    static getHandlerList(): HandlerList;
}
