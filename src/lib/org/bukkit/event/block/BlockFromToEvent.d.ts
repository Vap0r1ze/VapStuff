import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import BlockFace from '../../../../org/bukkit/block/BlockFace.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockFromToEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getFace(): BlockFace;
    getHandlers(): HandlerList;
    getToBlock(): Block;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BlockFromToEvent {
    static get $javaClass(): any;
    constructor(block: Block, face: BlockFace);
    constructor(block: Block, toBlock: Block);
    static getHandlerList(): HandlerList;
}
