import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from './VehicleEvent.js';
export default interface VehicleUpdateEvent extends VehicleEvent {
    getEventName(): string;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
}
export default class VehicleUpdateEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle);
    static getHandlerList(): HandlerList;
}
