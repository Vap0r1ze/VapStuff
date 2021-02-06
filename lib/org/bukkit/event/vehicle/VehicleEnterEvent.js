export default class VehicleEnterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.vehicle.VehicleEnterEvent');
    }
    static $isInstance(obj) {
        return obj instanceof VehicleEnterEvent.$javaClass;
    }
    constructor(...args) {
        return new VehicleEnterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return VehicleEnterEvent.$javaClass.getHandlerList(...args);
    }
}
