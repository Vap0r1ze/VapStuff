export default class RideableMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.RideableMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof RideableMinecart.$javaClass;
    }
}
