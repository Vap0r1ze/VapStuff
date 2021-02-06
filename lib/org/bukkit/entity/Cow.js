export default class Cow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Cow');
    }
    static $isInstance(obj) {
        return obj instanceof Cow.$javaClass;
    }
}
