"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EquipmentSlot {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.EquipmentSlot');
    }
    static $isInstance(obj) {
        return obj instanceof EquipmentSlot.$javaClass;
    }
    static get CHEST() {
        return this.$javaClass.CHEST;
    }
    static get FEET() {
        return this.$javaClass.FEET;
    }
    static get HAND() {
        return this.$javaClass.HAND;
    }
    static get HEAD() {
        return this.$javaClass.HEAD;
    }
    static get LEGS() {
        return this.$javaClass.LEGS;
    }
    static get OFF_HAND() {
        return this.$javaClass.OFF_HAND;
    }
}
exports.default = EquipmentSlot;
