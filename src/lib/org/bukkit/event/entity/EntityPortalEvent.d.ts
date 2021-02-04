import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTeleportEvent from './EntityTeleportEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface EntityPortalEvent extends EntityTeleportEvent {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getFrom(): Location;
    getHandlers(): HandlerList;
    getSearchRadius(): number;
    getTo(): Location;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFrom(from: Location): void;
    setSearchRadius(searchRadius: number): void;
    setTo(to: Location): void;
}
export default class EntityPortalEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, from: Location, to: Location);
    constructor(entity: Entity, from: Location, to: Location, searchRadius: number);
    static getHandlerList(): HandlerList;
}
