export default class RedstoneTorch {
    static get $javaClass() {
        return Java.type('org.bukkit.material.RedstoneTorch');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneTorch.$javaClass;
    }
    constructor(...args) {
        return new RedstoneTorch.$javaClass(...args);
    }
}
