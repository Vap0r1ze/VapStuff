export default class Wool {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Wool');
    }
    static $isInstance(obj) {
        return obj instanceof Wool.$javaClass;
    }
    constructor(...args) {
        return new Wool.$javaClass(...args);
    }
}
