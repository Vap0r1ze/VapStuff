export default class Comparator {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Comparator');
    }
    static $isInstance(obj) {
        return obj instanceof Comparator.$javaClass;
    }
    constructor(...args) {
        return new Comparator.$javaClass(...args);
    }
}
