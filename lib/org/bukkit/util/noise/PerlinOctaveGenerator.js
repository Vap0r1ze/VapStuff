export default class PerlinOctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.PerlinOctaveGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof PerlinOctaveGenerator.$javaClass;
    }
    constructor(...args) {
        return new PerlinOctaveGenerator.$javaClass(...args);
    }
}
