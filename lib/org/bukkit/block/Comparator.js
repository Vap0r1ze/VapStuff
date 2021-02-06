export default class Comparator {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Comparator');
    }
    static $isInstance(obj) {
        return obj instanceof Comparator.$javaClass;
    }
}
