export default class MetadataStore {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataStore');
    }
    static $isInstance(obj) {
        return obj instanceof MetadataStore.$javaClass;
    }
}
