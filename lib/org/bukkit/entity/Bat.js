export default class Bat {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Bat');
    }
    static $isInstance(obj) {
        return obj instanceof Bat.$javaClass;
    }
}
