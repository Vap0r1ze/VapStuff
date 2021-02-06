export default class Attachable {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Attachable');
    }
    static $isInstance(obj) {
        return obj instanceof Attachable.$javaClass;
    }
}
