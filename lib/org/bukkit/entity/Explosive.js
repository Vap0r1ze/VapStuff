export default class Explosive {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Explosive');
    }
    static $isInstance(obj) {
        return obj instanceof Explosive.$javaClass;
    }
}
