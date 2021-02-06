export default class SuspiciousStewMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.SuspiciousStewMeta');
    }
    static $isInstance(obj) {
        return obj instanceof SuspiciousStewMeta.$javaClass;
    }
}
