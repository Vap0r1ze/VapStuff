"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AreaEffectCloud {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AreaEffectCloud');
    }
    static $isInstance(obj) {
        return obj instanceof AreaEffectCloud.$javaClass;
    }
}
exports.default = AreaEffectCloud;
