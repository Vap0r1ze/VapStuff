export default class StonecutterInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.StonecutterInventory');
    }
    static $isInstance(obj) {
        return obj instanceof StonecutterInventory.$javaClass;
    }
}
