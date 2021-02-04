import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from './VehicleEvent.js';
export default interface VehicleDestroyEvent extends VehicleEvent, Cancellable {
    getAttacker(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class VehicleDestroyEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity);
    static getHandlerList(): HandlerList;
}
