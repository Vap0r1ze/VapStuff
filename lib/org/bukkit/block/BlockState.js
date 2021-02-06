export default class BlockState {
    static get $javaClass() {
        return Java.type('org.bukkit.block.BlockState');
    }
    static $isInstance(obj) {
        return obj instanceof BlockState.$javaClass;
    }
}
