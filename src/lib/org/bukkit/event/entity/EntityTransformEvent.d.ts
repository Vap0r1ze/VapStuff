import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityTransformEvent$TransformReason from './EntityTransformEvent$TransformReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityTransformEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getTransformReason(): EntityTransformEvent$TransformReason;
    getTransformedEntities(): Array<Entity>;
    getTransformedEntity(): Entity;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class EntityTransformEvent {
    static get $javaClass(): any;
    constructor(original: Entity, convertedList: Array<any>, transformReason: EntityTransformEvent$TransformReason);
    static getHandlerList(): HandlerList;
}
