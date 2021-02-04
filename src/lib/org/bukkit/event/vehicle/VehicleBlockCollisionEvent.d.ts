import Block from '../../../../org/bukkit/block/Block.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Vehicle from '../../../../org/bukkit/entity/Vehicle.js';
import VehicleCollisionEvent from './VehicleCollisionEvent.js';
export default interface VehicleBlockCollisionEvent extends VehicleCollisionEvent {
    getBlock(): Block;
    getEventName(): string;
    getHandlers(): HandlerList;
    getVehicle(): Vehicle;
    isAsynchronous(): boolean;
}
export default class VehicleBlockCollisionEvent {
    static get $javaClass(): any;
    constructor(vehicle: Vehicle, block: Block);
    static getHandlerList(): HandlerList;
}
