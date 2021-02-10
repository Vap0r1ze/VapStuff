"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehicleMoveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleMoveEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleMoveEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleMoveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleMoveEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = VehicleMoveEvent;
