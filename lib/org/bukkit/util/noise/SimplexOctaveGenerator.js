export default class SimplexOctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.SimplexOctaveGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof SimplexOctaveGenerator.$javaClass;
    }
    constructor(...args) {
        return new SimplexOctaveGenerator.$javaClass(...args);
    }
}
