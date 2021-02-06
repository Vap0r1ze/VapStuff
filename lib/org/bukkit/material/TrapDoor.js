export default class TrapDoor {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TrapDoor');
    }
    static $isInstance(obj) {
        return obj instanceof TrapDoor.$javaClass;
    }
    constructor(...args) {
        return new TrapDoor.$javaClass(...args);
    }
}
