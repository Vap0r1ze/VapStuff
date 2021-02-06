export default class VehicleEvent {
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
