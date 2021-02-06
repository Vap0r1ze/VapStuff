export default class LecternInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.LecternInventory');
    }
    static $isInstance(obj) {
        return obj instanceof LecternInventory.$javaClass;
    }
}
