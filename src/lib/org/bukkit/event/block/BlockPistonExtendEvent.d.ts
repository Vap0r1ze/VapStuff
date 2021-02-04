import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BlockPistonEvent from './BlockPistonEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockPistonExtendEvent extends BlockPistonEvent {
    getBlock(): Block;
    getBlocks(): Array<Block>;
    getDirection(): BlockFace;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLength(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isSticky(): boolean;
    setCancelled(cancelled: boolean): void;
}
export default class BlockPistonExtendEvent {
    static get $javaClass(): any;
    constructor(block: Block, length: number, direction: BlockFace);
    constructor(block: Block, blocks: Array<any>, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
