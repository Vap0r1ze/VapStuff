export default class GrindstoneInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.GrindstoneInventory');
    }
    static $isInstance(obj) {
        return obj instanceof GrindstoneInventory.$javaClass;
    }
}
