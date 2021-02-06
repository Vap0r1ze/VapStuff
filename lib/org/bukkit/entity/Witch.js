export default class Witch {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Witch');
    }
    static $isInstance(obj) {
        return obj instanceof Witch.$javaClass;
    }
}
