export default class StorageMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.StorageMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof StorageMinecart.$javaClass;
    }
}
