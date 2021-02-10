"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VehicleEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleEvent.$javaClass(...args);
    }
}
exports.default = VehicleEvent;
