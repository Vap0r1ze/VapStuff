"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BannerMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BannerMeta');
    }
    static $isInstance(obj) {
        return obj instanceof BannerMeta.$javaClass;
    }
}
exports.default = BannerMeta;
