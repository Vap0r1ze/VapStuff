export default class Conduit {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Conduit');
    }
    static $isInstance(obj) {
        return obj instanceof Conduit.$javaClass;
    }
}
