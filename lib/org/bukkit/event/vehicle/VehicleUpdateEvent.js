"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehicleUpdateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleUpdateEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleUpdateEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleUpdateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleUpdateEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VehicleUpdateEvent;
