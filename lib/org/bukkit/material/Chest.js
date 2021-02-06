export default class Chest {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Chest');
    }
    static $isInstance(obj) {
        return obj instanceof Chest.$javaClass;
    }
    constructor(...args) {
        return new Chest.$javaClass(...args);
    }
}
