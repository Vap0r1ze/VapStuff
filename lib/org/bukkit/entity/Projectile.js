export default class Projectile {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Projectile');
    }
    static $isInstance(obj) {
        return obj instanceof Projectile.$javaClass;
    }
}
