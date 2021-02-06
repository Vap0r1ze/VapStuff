export default class Wood {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Wood');
    }
    static $isInstance(obj) {
        return obj instanceof Wood.$javaClass;
    }
    constructor(...args) {
        return new Wood.$javaClass(...args);
    }
}
