export default class Crops {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Crops');
    }
    static $isInstance(obj) {
        return obj instanceof Crops.$javaClass;
    }
    constructor(...args) {
        return new Crops.$javaClass(...args);
    }
}
