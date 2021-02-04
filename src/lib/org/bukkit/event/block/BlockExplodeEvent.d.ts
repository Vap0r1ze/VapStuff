import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface BlockExplodeEvent extends BlockEvent, Cancellable {
    blockList(): Array<Block>;
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getYield(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setYield(_yield: number): void;
}
export default class BlockExplodeEvent {
    static get $javaClass(): any;
    constructor(what: Block, blocks: Array<any>, _yield: number);
    static getHandlerList(): HandlerList;
}
