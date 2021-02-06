export default class Lantern {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Lantern');
    }
    static $isInstance(obj) {
        return obj instanceof Lantern.$javaClass;
    }
}
