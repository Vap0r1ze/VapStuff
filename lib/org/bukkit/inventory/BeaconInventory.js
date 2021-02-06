export default class BeaconInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BeaconInventory');
    }
    static $isInstance(obj) {
        return obj instanceof BeaconInventory.$javaClass;
    }
}
