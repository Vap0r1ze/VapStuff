export default class Slime {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Slime');
    }
    static $isInstance(obj) {
        return obj instanceof Slime.$javaClass;
    }
}
