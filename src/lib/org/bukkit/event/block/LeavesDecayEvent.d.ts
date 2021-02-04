import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface LeavesDecayEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class LeavesDecayEvent {
    static get $javaClass(): any;
    constructor(block: Block);
    static getHandlerList(): HandlerList;
}
