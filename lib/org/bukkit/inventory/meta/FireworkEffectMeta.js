export default class FireworkEffectMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.FireworkEffectMeta');
    }
    static $isInstance(obj) {
        return obj instanceof FireworkEffectMeta.$javaClass;
    }
}
