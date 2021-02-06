export default class FixedMetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.FixedMetadataValue');
    }
    static $isInstance(obj) {
        return obj instanceof FixedMetadataValue.$javaClass;
    }
    constructor(...args) {
        return new FixedMetadataValue.$javaClass(...args);
    }
}
