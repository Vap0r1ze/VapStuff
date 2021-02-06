export default class LazyMetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.LazyMetadataValue');
    }
    static $isInstance(obj) {
        return obj instanceof LazyMetadataValue.$javaClass;
    }
    constructor(...args) {
        return new LazyMetadataValue.$javaClass(...args);
    }
}
