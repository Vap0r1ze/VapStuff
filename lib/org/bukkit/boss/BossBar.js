export default class BossBar {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.BossBar');
    }
    static $isInstance(obj) {
        return obj instanceof BossBar.$javaClass;
    }
}
