export default class BukkitTask {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitTask');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitTask.$javaClass;
    }
}
