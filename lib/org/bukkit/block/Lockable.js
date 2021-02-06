export default class Lockable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Lockable');
    }
    static $isInstance(obj) {
        return obj instanceof Lockable.$javaClass;
    }
}
