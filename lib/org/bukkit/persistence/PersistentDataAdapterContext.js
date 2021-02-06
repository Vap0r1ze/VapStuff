export default class PersistentDataAdapterContext {
    static get $javaClass() {
        return Java.type('org.bukkit.persistence.PersistentDataAdapterContext');
    }
    static $isInstance(obj) {
        return obj instanceof PersistentDataAdapterContext.$javaClass;
    }
}
