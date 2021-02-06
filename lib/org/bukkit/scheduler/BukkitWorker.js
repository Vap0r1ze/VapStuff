export default class BukkitWorker {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitWorker');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitWorker.$javaClass;
    }
}
