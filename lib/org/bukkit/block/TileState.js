export default class TileState {
    static get $javaClass() {
        return Java.type('org.bukkit.block.TileState');
    }
    static $isInstance(obj) {
        return obj instanceof TileState.$javaClass;
    }
}
