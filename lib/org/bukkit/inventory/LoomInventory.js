export default class LoomInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.LoomInventory');
    }
    static $isInstance(obj) {
        return obj instanceof LoomInventory.$javaClass;
    }
}
