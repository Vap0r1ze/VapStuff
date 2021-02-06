export default class MetadataValueAdapter {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataValueAdapter');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataValueAdapter.$javaClass;
    }
}
