export default class Hanging {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Hanging');
    }
    static $isInstance(obj) {
        return obj instanceof Hanging.$javaClass;
    }
}
