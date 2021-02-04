import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from './VehicleEvent.js';
export default interface VehicleMoveEvent extends VehicleEvent {
    getEventName(): string;
    getFrom(): Location;
    getHandlers(): HandlerList;
    getTo(): Location;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
}
export default class VehicleMoveEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, from: Location, to: Location);
    static getHandlerList(): HandlerList;
}
