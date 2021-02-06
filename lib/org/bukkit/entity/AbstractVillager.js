export default class AbstractVillager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractVillager');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractVillager.$javaClass;
    }
}
