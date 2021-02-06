export default class VehicleExitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleExitEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleExitEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleExitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleExitEvent.$javaClass.getHandlerList(...args);
    }
}
