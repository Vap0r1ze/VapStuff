import Block from '../../../../org/bukkit/block/Block.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import BlockPistonEvent from './BlockPistonEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface BlockPistonRetractEvent extends BlockPistonEvent {
    getBlock(): Block;
    getBlocks(): Array<Block>;
    getDirection(): BlockFace;
    getEventName(): string;
    getHandlers(): HandlerList;
    getRetractLocation(): Location;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isSticky(): boolean;
    setCancelled(cancelled: boolean): void;
}
export default class BlockPistonRetractEvent {
    static get $javaClass(): any;
    constructor(block: Block, blocks: Array<any>, direction: BlockFace);
    static getHandlerList(): HandlerList;
}
