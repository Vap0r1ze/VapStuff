export default class Utility {
    static get $javaClass() {
        return Java.type('org.bukkit.Utility');
    }
    static $isInstance(obj) {
        return obj instanceof Utility.$javaClass;
    }
}
