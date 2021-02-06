export default class PoweredMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.PoweredMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof PoweredMinecart.$javaClass;
    }
}
