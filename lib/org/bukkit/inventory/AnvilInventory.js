export default class AnvilInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.AnvilInventory');
    }
    static $isInstance(obj) {
        return obj instanceof AnvilInventory.$javaClass;
    }
}
