export default class AbstractHorseInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.AbstractHorseInventory');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractHorseInventory.$javaClass;
    }
}
