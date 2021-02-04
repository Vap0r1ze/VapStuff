import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from './VehicleEvent.js';
export default interface VehicleEnterEvent extends VehicleEvent, Cancellable {
    getEntered(): Entity;
    getEventName(): string;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class VehicleEnterEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, entered: Entity);
    static getHandlerList(): HandlerList;
}
