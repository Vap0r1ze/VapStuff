export default class Phantom {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Phantom');
    }
    static $isInstance(obj) {
        return obj instanceof Phantom.$javaClass;
    }
}
