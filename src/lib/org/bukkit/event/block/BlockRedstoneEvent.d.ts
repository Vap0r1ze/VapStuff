import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockRedstoneEvent extends BlockEvent {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewCurrent(): number;
    getOldCurrent(): number;
    isAsynchronous(): boolean;
    setNewCurrent(newCurrent: number): void;
}
export default class BlockRedstoneEvent {
    static get $javaClass(): any;
    constructor(block: Block, oldCurrent: number, newCurrent: number);
    static getHandlerList(): HandlerList;
}
