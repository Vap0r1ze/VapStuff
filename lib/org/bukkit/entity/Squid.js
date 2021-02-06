export default class Squid {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Squid');
    }
    static $isInstance(obj) {
        return obj instanceof Squid.$javaClass;
    }
}
