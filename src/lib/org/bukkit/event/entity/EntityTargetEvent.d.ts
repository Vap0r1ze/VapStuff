import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityTargetEvent$TargetReason from './EntityTargetEvent$TargetReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityTargetEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getReason(): EntityTargetEvent$TargetReason;
    getTarget(): Entity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setTarget(target: Entity): void;
}
export default class EntityTargetEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, target: Entity, reason: EntityTargetEvent$TargetReason);
    static getHandlerList(): HandlerList;
}
