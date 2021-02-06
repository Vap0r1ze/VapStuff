export default class BlockIterator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.BlockIterator');
    }
    static $isInstance(obj) {
        return obj instanceof BlockIterator.$javaClass;
    }
    constructor(...args) {
        return new BlockIterator.$javaClass(...args);
    }
}
