export default class Ladder {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Ladder');
    }
    static $isInstance(obj) {
        return obj instanceof Ladder.$javaClass;
    }
    constructor(...args) {
        return new Ladder.$javaClass(...args);
    }
}
