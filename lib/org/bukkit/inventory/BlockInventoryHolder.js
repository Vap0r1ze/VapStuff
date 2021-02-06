export default class BlockInventoryHolder {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BlockInventoryHolder');
    }
    static $isInstance(obj) {
        return obj instanceof BlockInventoryHolder.$javaClass;
    }
}
