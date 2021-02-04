import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityCombustEvent extends EntityEvent, Cancellable {
    getDuration(): number;
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setDuration(duration: number): void;
}
export default class EntityCombustEvent {
    static get $javaClass(): any;
    constructor(combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
