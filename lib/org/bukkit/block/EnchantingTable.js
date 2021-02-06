export default class EnchantingTable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EnchantingTable');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantingTable.$javaClass;
    }
}
