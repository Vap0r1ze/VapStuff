export default class PlayerInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.PlayerInventory');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerInventory.$javaClass;
    }
}
