export default class Ageable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Ageable');
    }
    static $isInstance(obj) {
        return obj instanceof Ageable.$javaClass;
    }
}
