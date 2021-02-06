export default class Chunk {
    static get $javaClass() {
        return Java.type('org.bukkit.Chunk');
    }
    static $isInstance(obj) {
        return obj instanceof Chunk.$javaClass;
    }
}
