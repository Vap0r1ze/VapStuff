export default class Tameable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Tameable');
    }
    static $isInstance(obj) {
        return obj instanceof Tameable.$javaClass;
    }
}
