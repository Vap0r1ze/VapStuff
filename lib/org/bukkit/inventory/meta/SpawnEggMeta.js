export default class SpawnEggMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.SpawnEggMeta');
    }
    static $isInstance(obj) {
        return obj instanceof SpawnEggMeta.$javaClass;
    }
}
