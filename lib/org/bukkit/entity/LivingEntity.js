"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivingEntity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LivingEntity');
    }
    static $isInstance(obj) {
        return obj instanceof LivingEntity.$javaClass;
    }
}
exports.default = LivingEntity;
