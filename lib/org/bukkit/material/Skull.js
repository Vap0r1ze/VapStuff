export default class Skull {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Skull');
    }
    static $isInstance(obj) {
        return obj instanceof Skull.$javaClass;
    }
    constructor(...args) {
        return new Skull.$javaClass(...args);
    }
}
