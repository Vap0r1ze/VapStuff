export default class Sittable {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Sittable');
    }
    static $isInstance(obj) {
        return obj instanceof Sittable.$javaClass;
    }
}
