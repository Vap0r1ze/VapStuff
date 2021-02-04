import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityCombustEvent from './EntityCombustEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface EntityCombustByEntityEvent extends EntityCombustEvent {
    getCombuster(): Entity;
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
export default class EntityCombustByEntityEvent {
    static get $javaClass(): any;
    constructor(combuster: Entity, combustee: Entity, duration: number);
    static getHandlerList(): HandlerList;
}
