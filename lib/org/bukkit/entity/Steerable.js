export default class Steerable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Steerable');
    }
    static $isInstance(obj) {
        return obj instanceof Steerable.$javaClass;
    }
}
