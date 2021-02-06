export default class CartographyInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CartographyInventory');
    }
    static $isInstance(obj) {
        return obj instanceof CartographyInventory.$javaClass;
    }
}
