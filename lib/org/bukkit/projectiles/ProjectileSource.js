export default class ProjectileSource {
    static get $javaClass() {
        return Java.type('org.bukkit.projectiles.ProjectileSource');
    }
    static $isInstance(obj) {
        return obj instanceof ProjectileSource.$javaClass;
    }
}
