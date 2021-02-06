export default class Nameable {
    static get $javaClass() {
        return Java.type('org.bukkit.Nameable');
    }
    static $isInstance(obj) {
        return obj instanceof Nameable.$javaClass;
    }
}
