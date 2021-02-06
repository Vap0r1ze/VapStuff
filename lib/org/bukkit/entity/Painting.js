export default class Painting {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Painting');
    }
    static $isInstance(obj) {
        return obj instanceof Painting.$javaClass;
    }
}
