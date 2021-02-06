export default class Hopper {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Hopper');
    }
    static $isInstance(obj) {
        return obj instanceof Hopper.$javaClass;
    }
    constructor(...args) {
        return new Hopper.$javaClass(...args);
    }
}
