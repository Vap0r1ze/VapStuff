export default class LongGrass {
    static get $javaClass() {
        return Java.type('org.bukkit.material.LongGrass');
    }
    static $isInstance(obj) {
        return obj instanceof LongGrass.$javaClass;
    }
    constructor(...args) {
        return new LongGrass.$javaClass(...args);
    }
}
