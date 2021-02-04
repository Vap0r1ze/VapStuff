import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntitySpawnEvent from './EntitySpawnEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Projectile from '../../../../org/bukkit/entity/Projectile.js';
export default interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
    getEntityType(): EntityType;
    getEventName(): string;
    getHandlers(): HandlerList;
    getLocation(): Location;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class ProjectileLaunchEvent {
    static get $javaClass(): any;
    constructor(what: Entity);
    static getHandlerList(): HandlerList;
}
