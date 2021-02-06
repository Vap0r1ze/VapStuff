export default class FurnaceInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.FurnaceInventory');
    }
    static $isInstance(obj) {
        return obj instanceof FurnaceInventory.$javaClass;
    }
}
