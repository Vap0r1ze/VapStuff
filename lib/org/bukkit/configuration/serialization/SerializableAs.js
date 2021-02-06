export default class SerializableAs {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.serialization.SerializableAs');
    }
    static $isInstance(obj) {
        return obj instanceof SerializableAs.$javaClass;
    }
}
