export default class Observer {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Observer');
    }
    static $isInstance(obj) {
        return obj instanceof Observer.$javaClass;
    }
    constructor(...args) {
        return new Observer.$javaClass(...args);
    }
}
