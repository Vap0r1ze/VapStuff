export default class Vine {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Vine');
    }
    static $isInstance(obj) {
        return obj instanceof Vine.$javaClass;
    }
    constructor(...args) {
        return new Vine.$javaClass(...args);
    }
}
