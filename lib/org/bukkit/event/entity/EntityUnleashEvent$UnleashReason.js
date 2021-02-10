"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityUnleashEvent$UnleashReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityUnleashEvent$UnleashReason');
    }
    static $isInstance(obj) {
        return obj instanceof EntityUnleashEvent$UnleashReason.$javaClass;
    }
    static get DISTANCE() {
        return this.$javaClass.DISTANCE;
    }
    static get HOLDER_GONE() {
        return this.$javaClass.HOLDER_GONE;
    }
    static get PLAYER_UNLEASH() {
        return this.$javaClass.PLAYER_UNLEASH;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
exports.default = EntityUnleashEvent$UnleashReason;
