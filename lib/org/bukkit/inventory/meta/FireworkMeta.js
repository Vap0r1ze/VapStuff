export default class FireworkMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.FireworkMeta');
    }
    static $isInstance(obj) {
        return obj instanceof FireworkMeta.$javaClass;
    }
}
