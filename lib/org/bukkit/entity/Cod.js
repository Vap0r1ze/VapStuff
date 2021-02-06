export default class Cod {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Cod');
    }
    static $isInstance(obj) {
        return obj instanceof Cod.$javaClass;
    }
}
