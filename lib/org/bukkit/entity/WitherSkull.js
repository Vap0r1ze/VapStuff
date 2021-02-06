export default class WitherSkull {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.WitherSkull');
    }
    static $isInstance(obj) {
        return obj instanceof WitherSkull.$javaClass;
    }
}
