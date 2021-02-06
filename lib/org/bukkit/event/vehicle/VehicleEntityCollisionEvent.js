export default class VehicleEntityCollisionEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEntityCollisionEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleEntityCollisionEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleEntityCollisionEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleEntityCollisionEvent.$javaClass.getHandlerList(...args);
    }
}
