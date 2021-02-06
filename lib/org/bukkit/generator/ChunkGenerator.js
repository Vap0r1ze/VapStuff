export default class ChunkGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.generator.ChunkGenerator');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkGenerator.$javaClass;
    }
    constructor(...args) {
        return new ChunkGenerator.$javaClass(...args);
    }
}
