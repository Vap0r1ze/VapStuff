export default class EntityEquipment {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.EntityEquipment');
    }
    static $isInstance(obj) {
        return obj instanceof EntityEquipment.$javaClass;
    }
}
