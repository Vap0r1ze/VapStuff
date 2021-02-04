import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
export default interface BlockPhysicsEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getChangedType(): Material;
    getEventName(): string;
    getHandlers(): HandlerList;
    getSourceBlock(): Block;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BlockPhysicsEvent {
    static get $javaClass(): any;
    constructor(block: Block, changed: BlockData);
    constructor(block: Block, changed: BlockData, sourceBlock: Block);
    static getHandlerList(): HandlerList;
}
