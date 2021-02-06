export default class Firework {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Firework');
    }
    static $isInstance(obj) {
        return obj instanceof Firework.$javaClass;
    }
}
