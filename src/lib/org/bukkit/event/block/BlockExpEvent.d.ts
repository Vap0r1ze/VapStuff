import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockExpEvent extends BlockEvent {
    getBlock(): Block;
    getEventName(): string;
    getExpToDrop(): number;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    setExpToDrop(exp: number): void;
}
export default class BlockExpEvent {
    static get $javaClass(): any;
    constructor(block: Block, exp: number);
    static getHandlerList(): HandlerList;
}
