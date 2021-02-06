export default class Vehicle {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Vehicle');
    }
    static $isInstance(obj) {
        return obj instanceof Vehicle.$javaClass;
    }
}
