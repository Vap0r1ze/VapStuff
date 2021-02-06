export default class MetadataConversionException {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataConversionException');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataConversionException.$javaClass;
    }
}
