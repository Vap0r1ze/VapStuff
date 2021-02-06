export default class VehicleCreateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleCreateEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleCreateEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleCreateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleCreateEvent.$javaClass.getHandlerList(...args);
    }
}
