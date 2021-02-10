"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LeatherArmorMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.LeatherArmorMeta');
    }
    static $isInstance(obj) {
        return obj instanceof LeatherArmorMeta.$javaClass;
    }
}
exports.default = LeatherArmorMeta;
