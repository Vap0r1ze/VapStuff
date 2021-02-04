import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import BlockIgniteEvent$IgniteCause from './BlockIgniteEvent$IgniteCause.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockIgniteEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getCause(): BlockIgniteEvent$IgniteCause;
    getEventName(): string;
    getHandlers(): HandlerList;
    getIgnitingBlock(): Block;
    getIgnitingEntity(): Entity;
    getPlayer(): Player;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class BlockIgniteEvent {
    static get $javaClass(): any;
    constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity);
    constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingBlock: Block);
    constructor(theBlock: Block, cause: BlockIgniteEvent$IgniteCause, ignitingEntity: Entity, ignitingBlock: Block);
    static getHandlerList(): HandlerList;
}
