"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pose {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Pose');
    }
    static $isInstance(obj) {
        return obj instanceof Pose.$javaClass;
    }
    static get DYING() {
        return this.$javaClass.DYING;
    }
    static get FALL_FLYING() {
        return this.$javaClass.FALL_FLYING;
    }
    static get SLEEPING() {
        return this.$javaClass.SLEEPING;
    }
    static get SNEAKING() {
        return this.$javaClass.SNEAKING;
    }
    static get SPIN_ATTACK() {
        return this.$javaClass.SPIN_ATTACK;
    }
    static get STANDING() {
        return this.$javaClass.STANDING;
    }
    static get SWIMMING() {
        return this.$javaClass.SWIMMING;
    }
}
exports.default = Pose;
