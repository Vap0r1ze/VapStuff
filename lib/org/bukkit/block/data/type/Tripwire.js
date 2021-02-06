export default class Tripwire {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Tripwire');
    }
    static $isInstance(obj) {
        return obj instanceof Tripwire.$javaClass;
    }
}
