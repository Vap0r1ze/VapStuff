export default class KeyedBossBar {
    static get $javaClass() {
        return Java.type('org.bukkit.boss.KeyedBossBar');
    }
    static $isInstance(obj) {
        return obj instanceof KeyedBossBar.$javaClass;
    }
}
