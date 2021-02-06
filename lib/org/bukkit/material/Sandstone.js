export default class Sandstone {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sandstone');
    }
    static $isInstance(obj) {
        return obj instanceof Sandstone.$javaClass;
    }
    constructor(...args) {
        return new Sandstone.$javaClass(...args);
    }
}
