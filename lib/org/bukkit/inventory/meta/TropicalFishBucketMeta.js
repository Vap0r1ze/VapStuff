"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TropicalFishBucketMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.TropicalFishBucketMeta');
    }
    static $isInstance(obj) {
        return obj instanceof TropicalFishBucketMeta.$javaClass;
    }
}
exports.default = TropicalFishBucketMeta;
