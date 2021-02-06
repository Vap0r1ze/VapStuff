export default class Lectern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Lectern');
    }
    static $isInstance(obj) {
        return obj instanceof Lectern.$javaClass;
    }
}
