export default class Damageable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Damageable');
    }
    static $isInstance(obj) {
        return obj instanceof Damageable.$javaClass;
    }
}
