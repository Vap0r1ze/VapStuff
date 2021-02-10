"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkullMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.SkullMeta');
    }
    static $isInstance(obj) {
        return obj instanceof SkullMeta.$javaClass;
    }
}
exports.default = SkullMeta;
