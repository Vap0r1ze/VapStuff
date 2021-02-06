export default class PressurePlate {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PressurePlate');
    }
    static $isInstance(obj) {
        return obj instanceof PressurePlate.$javaClass;
    }
    constructor(...args) {
        return new PressurePlate.$javaClass(...args);
    }
}
