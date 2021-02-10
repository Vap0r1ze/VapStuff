"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FireworkMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.FireworkMeta');
    }
    static $isInstance(obj) {
        return obj instanceof FireworkMeta.$javaClass;
    }
}
exports.default = FireworkMeta;
