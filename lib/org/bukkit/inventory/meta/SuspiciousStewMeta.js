"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuspiciousStewMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.SuspiciousStewMeta');
    }
    static $isInstance(obj) {
        return obj instanceof SuspiciousStewMeta.$javaClass;
    }
}
exports.default = SuspiciousStewMeta;
