export default class ChunkEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkEvent.$javaClass;
    }
}
