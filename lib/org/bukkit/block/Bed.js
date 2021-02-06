export default class Bed {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Bed');
    }
    static $isInstance(obj) {
        return obj instanceof Bed.$javaClass;
    }
}
