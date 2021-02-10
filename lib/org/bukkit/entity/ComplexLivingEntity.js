"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComplexLivingEntity {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ComplexLivingEntity');
    }
    static $isInstance(obj) {
        return obj instanceof ComplexLivingEntity.$javaClass;
    }
}
exports.default = ComplexLivingEntity;
