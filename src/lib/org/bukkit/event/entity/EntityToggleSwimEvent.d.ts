import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
export default interface EntityToggleSwimEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isSwimming(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class EntityToggleSwimEvent {
    static get $javaClass(): any;
    constructor(who: LivingEntity, isSwimming: boolean);
    static getHandlerList(): HandlerList;
}
