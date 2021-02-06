export default class Boat {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Boat');
    }
    static $isInstance(obj) {
        return obj instanceof Boat.$javaClass;
    }
}
