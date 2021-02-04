import Block from '../../../../org/bukkit/block/Block.js';
import BlockEvent from './BlockEvent.js';
import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import CauldronLevelChangeEvent$ChangeReason from './CauldronLevelChangeEvent$ChangeReason.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface CauldronLevelChangeEvent extends BlockEvent, Cancellable {
    getBlock(): Block;
    getEntity(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getNewLevel(): number;
    getOldLevel(): number;
    getReason(): CauldronLevelChangeEvent$ChangeReason;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancelled: boolean): void;
    setNewLevel(newLevel: number): void;
}
export default class CauldronLevelChangeEvent {
    static get $javaClass(): any;
    constructor(block: Block, entity: Entity, reason: CauldronLevelChangeEvent$ChangeReason, oldLevel: number, newLevel: number);
    static getHandlerList(): HandlerList;
}
