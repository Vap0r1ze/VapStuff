export default class ItemMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.ItemMeta');
    }
    static $isInstance(obj) {
        return obj instanceof ItemMeta.$javaClass;
    }
}
