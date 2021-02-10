"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractArrow$PickupStatus {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.AbstractArrow$PickupStatus');
    }
    static $isInstance(obj) {
        return obj instanceof AbstractArrow$PickupStatus.$javaClass;
    }
    static get ALLOWED() {
        return this.$javaClass.ALLOWED;
    }
    static get CREATIVE_ONLY() {
        return this.$javaClass.CREATIVE_ONLY;
    }
    static get DISALLOWED() {
        return this.$javaClass.DISALLOWED;
    }
}
exports.default = AbstractArrow$PickupStatus;
