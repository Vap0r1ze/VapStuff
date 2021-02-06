export default class BlockChangeDelegate {
    static get $javaClass() {
        return Java.type('org.bukkit.BlockChangeDelegate');
    }
    static $isInstance(obj) {
        return obj instanceof BlockChangeDelegate.$javaClass;
    }
}
