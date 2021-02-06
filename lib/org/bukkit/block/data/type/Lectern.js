export default class Lectern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Lectern');
    }
    static $isInstance(obj) {
        return obj instanceof Lectern.$javaClass;
    }
}
