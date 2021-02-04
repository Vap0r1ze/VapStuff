import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
export default interface EntityTeleportEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getFrom(): Location;
    getHandlers(): HandlerList;
    getTo(): Location;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFrom(from: Location): void;
    setTo(to: Location): void;
}
export default class EntityTeleportEvent {
    static get $javaClass(): any;
    constructor(what: Entity, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}
