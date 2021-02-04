import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import EntityUnleashEvent$UnleashReason from './EntityUnleashEvent$UnleashReason.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityUnleashEvent extends EntityEvent {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getReason(): EntityUnleashEvent$UnleashReason;
    isAsynchronous(): boolean;
}
export default class EntityUnleashEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, reason: EntityUnleashEvent$UnleashReason);
    static getHandlerList(): HandlerList;
}
