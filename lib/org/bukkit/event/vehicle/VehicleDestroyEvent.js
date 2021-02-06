export default class VehicleDestroyEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleDestroyEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleDestroyEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleDestroyEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleDestroyEvent.$javaClass.getHandlerList(...args);
    }
}
