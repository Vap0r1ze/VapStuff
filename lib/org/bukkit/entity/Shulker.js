export default class Shulker {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Shulker');
    }
    static $isInstance(obj) {
        return obj instanceof Shulker.$javaClass;
    }
}
