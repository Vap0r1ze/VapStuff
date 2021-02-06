export default class HorseInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.HorseInventory');
    }
    static $isInstance(obj) {
        return obj instanceof HorseInventory.$javaClass;
    }
}
