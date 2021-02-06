export default class OctaveGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.noise.OctaveGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof OctaveGenerator.$javaClass;
    }
}
