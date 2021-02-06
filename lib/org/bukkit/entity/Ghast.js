export default class Ghast {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Ghast');
    }
    static $isInstance(obj) {
        return obj instanceof Ghast.$javaClass;
    }
}
