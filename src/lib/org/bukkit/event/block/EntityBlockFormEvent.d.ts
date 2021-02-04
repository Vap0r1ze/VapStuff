import Block from '../../../../org/bukkit/block/Block.js';
import BlockFormEvent from './BlockFormEvent.js';
import BlockState from '../../../../org/bukkit/block/BlockState.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityBlockFormEvent extends BlockFormEvent {
    getBlock(): Block;
    getEntity(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewState(): BlockState;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class EntityBlockFormEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, block: Block, blockstate: BlockState);
    static getHandlerList(): HandlerList;
}
