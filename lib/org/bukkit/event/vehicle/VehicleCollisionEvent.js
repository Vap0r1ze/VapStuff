"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehicleCollisionEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleCollisionEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleCollisionEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleCollisionEvent.$javaClass(...args);
    }
}
exports.default = VehicleCollisionEvent;
