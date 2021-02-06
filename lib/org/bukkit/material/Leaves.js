export default class Leaves {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Leaves');
    }
    static $isInstance(obj) {
        return obj instanceof Leaves.$javaClass;
    }
    constructor(...args) {
        return new Leaves.$javaClass(...args);
    }
}
