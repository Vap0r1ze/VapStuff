export default class FlowerPot {
    static get $javaClass() {
        return Java.type('org.bukkit.material.FlowerPot');
    }
    static $isInstance(obj) {
        return obj instanceof FlowerPot.$javaClass;
    }
    constructor(...args) {
        return new FlowerPot.$javaClass(...args);
    }
}
