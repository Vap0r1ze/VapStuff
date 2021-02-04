import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LivingEntity from '../../../../org/bukkit/entity/LivingEntity.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from './VehicleEvent.js';
export default interface VehicleExitEvent extends VehicleEvent, Cancellable {
    getEventName(): string;
    getExited(): LivingEntity;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
}
export default class VehicleExitEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, exited: LivingEntity);
    static getHandlerList(): HandlerList;
}
