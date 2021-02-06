export default class SkullMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.SkullMeta');
    }
    static $isInstance(obj) {
        return obj instanceof SkullMeta.$javaClass;
    }
}
