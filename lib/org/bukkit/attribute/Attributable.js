export default class Attributable {
    static get $javaClass() {
        return Java.type('org.bukkit.attribute.Attributable');
    }
    static $isInstance(obj) {
        return obj instanceof Attributable.$javaClass;
    }
}
