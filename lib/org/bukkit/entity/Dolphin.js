export default class Dolphin {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Dolphin');
    }
    static $isInstance(obj) {
        return obj instanceof Dolphin.$javaClass;
    }
}
