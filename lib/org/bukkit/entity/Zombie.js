export default class Zombie {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Zombie');
    }
    static $isInstance(obj) {
        return obj instanceof Zombie.$javaClass;
    }
}
