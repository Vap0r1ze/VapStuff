export default class Cauldron {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Cauldron');
    }
    static $isInstance(obj) {
        return obj instanceof Cauldron.$javaClass;
    }
    constructor(...args) {
        return new Cauldron.$javaClass(...args);
    }
}
