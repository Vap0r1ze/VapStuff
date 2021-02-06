export default class Bed {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Bed');
    }
    static $isInstance(obj) {
        return obj instanceof Bed.$javaClass;
    }
    constructor(...args) {
        return new Bed.$javaClass(...args);
    }
}
