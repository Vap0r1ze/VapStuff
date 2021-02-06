export default class BlockDataMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BlockDataMeta');
    }
    static $isInstance(obj) {
        return obj instanceof BlockDataMeta.$javaClass;
    }
}
