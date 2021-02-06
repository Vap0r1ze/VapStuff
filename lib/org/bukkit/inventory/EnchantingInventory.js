export default class EnchantingInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.EnchantingInventory');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantingInventory.$javaClass;
    }
}
