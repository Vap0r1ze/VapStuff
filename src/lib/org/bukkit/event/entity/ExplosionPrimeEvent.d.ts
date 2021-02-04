import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from './EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import Explosive from '../../../../org/bukkit/entity/Explosive.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
export default interface ExplosionPrimeEvent extends EntityEvent, Cancellable {
    getEntity(): Entity;
    getEntityType(): EntityType;
    getEventName(): string;
    getFire(): boolean;
    getHandlers(): HandlerList;
    getRadius(): number;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setFire(fire: boolean): void;
    setRadius(radius: number): void;
}
export default class ExplosionPrimeEvent {
    static get $javaClass(): any;
    constructor(explosive: Explosive);
    constructor(what: Entity, radius: number, fire: boolean);
    static getHandlerList(): HandlerList;
}
