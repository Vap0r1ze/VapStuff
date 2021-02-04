import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockPistonEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getDirection(): BlockFace;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isSticky(): boolean;
    setCancelled(cancelled: boolean): void;
}
export default class BlockPistonEvent {
    static get $javaClass(): any;
    constructor(block: Block, direction: BlockFace);
}
