export default class Blaze {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Blaze');
    }
    static $isInstance(obj) {
        return obj instanceof Blaze.$javaClass;
    }
}
