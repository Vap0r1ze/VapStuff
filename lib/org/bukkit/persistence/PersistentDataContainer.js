export default class PersistentDataContainer {
    static get $javaClass() {
        return Java.type('org.bukkit.persistence.PersistentDataContainer');
    }
    static $isInstance(obj) {
        return obj instanceof PersistentDataContainer.$javaClass;
    }
}
