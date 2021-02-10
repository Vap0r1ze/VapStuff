"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehicleBlockCollisionEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleBlockCollisionEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleBlockCollisionEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleBlockCollisionEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleBlockCollisionEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VehicleBlockCollisionEvent;
