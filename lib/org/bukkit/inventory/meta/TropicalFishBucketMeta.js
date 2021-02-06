export default class TropicalFishBucketMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.TropicalFishBucketMeta');
    }
    static $isInstance(obj) {
        return obj instanceof TropicalFishBucketMeta.$javaClass;
    }
}
