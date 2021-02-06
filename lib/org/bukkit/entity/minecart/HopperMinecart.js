export default class HopperMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.HopperMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof HopperMinecart.$javaClass;
    }
}
