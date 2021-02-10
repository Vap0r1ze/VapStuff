"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PotionMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.PotionMeta');
    }
    static $isInstance(obj) {
        return obj instanceof PotionMeta.$javaClass;
    }
}
exports.default = PotionMeta;
