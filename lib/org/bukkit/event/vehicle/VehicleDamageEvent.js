"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehicleDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleDamageEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleDamageEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleDamageEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VehicleDamageEvent;
