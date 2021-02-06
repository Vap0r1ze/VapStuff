export default class Openable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Openable');
    }
    static $isInstance(obj) {
        return obj instanceof Openable.$javaClass;
    }
}
