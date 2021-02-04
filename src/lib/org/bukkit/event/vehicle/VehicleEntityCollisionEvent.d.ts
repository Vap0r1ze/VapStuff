import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleCollisionEvent from './VehicleCollisionEvent.js';
export default interface VehicleEntityCollisionEvent extends VehicleCollisionEvent, Cancellable {
    getEntity(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    isCollisionCancelled(): boolean;
    isPickupCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setCollisionCancelled(cancel: boolean): void;
    setPickupCancelled(cancel: boolean): void;
}
export default class VehicleEntityCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, entity: Entity);
    static getHandlerList(): HandlerList;
}
