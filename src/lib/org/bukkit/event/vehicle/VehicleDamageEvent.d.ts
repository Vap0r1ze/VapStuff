import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleEvent from './VehicleEvent.js';
export default interface VehicleDamageEvent extends VehicleEvent, Cancellable {
    getAttacker(): Entity;
    getDamage(): number;
    getEventName(): string;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    setDamage(damage: number): void;
}
export default class VehicleDamageEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, attacker: Entity, damage: number);
    static getHandlerList(): HandlerList;
}
