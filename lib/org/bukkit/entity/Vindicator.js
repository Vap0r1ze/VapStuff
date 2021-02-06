export default class Vindicator {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Vindicator');
    }
    static $isInstance(obj) {
        return obj instanceof Vindicator.$javaClass;
    }
}
