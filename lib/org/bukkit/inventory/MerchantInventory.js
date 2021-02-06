export default class MerchantInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.MerchantInventory');
    }
    static $isInstance(obj) {
        return obj instanceof MerchantInventory.$javaClass;
    }
}
