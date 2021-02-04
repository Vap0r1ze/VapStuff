import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTargetEvent from './EntityTargetEvent.js';
import EntityTargetEvent$TargetReason from './EntityTargetEvent$TargetReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityTargetLivingEntityEvent extends EntityTargetEvent {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getReason(): EntityTargetEvent$TargetReason;
    getTarget(): Entity;
    getTarget(): LivingEntity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setTarget(target: Entity): void;
}
export default class EntityTargetLivingEntityEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, target: LivingEntity, reason: EntityTargetEvent$TargetReason);
    static getHandlerList(): HandlerList;
}
