export default class Colorable {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Colorable');
    }
    static $isInstance(obj) {
        return obj instanceof Colorable.$javaClass;
    }
}
