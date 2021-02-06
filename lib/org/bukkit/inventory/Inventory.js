export default class Inventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.Inventory');
    }
    static $isInstance(obj) {
        return obj instanceof Inventory.$javaClass;
    }
}
