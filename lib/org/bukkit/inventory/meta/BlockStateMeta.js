export default class BlockStateMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BlockStateMeta');
    }
    static $isInstance(obj) {
        return obj instanceof BlockStateMeta.$javaClass;
    }
}
