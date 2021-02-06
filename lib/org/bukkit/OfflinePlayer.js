export default class OfflinePlayer {
    static get $javaClass() {
        return Java.type('org.bukkit.OfflinePlayer');
    }
    static $isInstance(obj) {
        return obj instanceof OfflinePlayer.$javaClass;
    }
}
