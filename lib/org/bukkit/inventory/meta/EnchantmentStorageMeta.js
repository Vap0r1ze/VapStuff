export default class EnchantmentStorageMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.EnchantmentStorageMeta');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantmentStorageMeta.$javaClass;
    }
}
