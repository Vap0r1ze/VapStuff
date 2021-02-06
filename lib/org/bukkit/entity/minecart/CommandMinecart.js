export default class CommandMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.CommandMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof CommandMinecart.$javaClass;
    }
}
