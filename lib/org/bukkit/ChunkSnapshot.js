export default class ChunkSnapshot {
    static get $javaClass() {
        return Java.type('org.bukkit.ChunkSnapshot');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkSnapshot.$javaClass;
    }
}
