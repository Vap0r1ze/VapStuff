"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CrossbowMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.CrossbowMeta');
    }
    static $isInstance(obj) {
        return obj instanceof CrossbowMeta.$javaClass;
    }
}
exports.default = CrossbowMeta;
