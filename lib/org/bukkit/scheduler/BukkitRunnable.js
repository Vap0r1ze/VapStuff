export default class BukkitRunnable {
    static get $javaClass() {
        return Java.type('org.bukkit.scheduler.BukkitRunnable');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitRunnable.$javaClass;
    }
    constructor(...args) {
        return new BukkitRunnable.$javaClass(...args);
    }
}
