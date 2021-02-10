"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FireworkEffectMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.FireworkEffectMeta');
    }
    static $isInstance(obj) {
        return obj instanceof FireworkEffectMeta.$javaClass;
    }
}
exports.default = FireworkEffectMeta;
