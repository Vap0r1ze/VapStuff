export default class BrewerInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BrewerInventory');
    }
    static $isInstance(obj) {
        return obj instanceof BrewerInventory.$javaClass;
    }
}
