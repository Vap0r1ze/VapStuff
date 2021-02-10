"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityTransformEvent$TransformReason {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTransformEvent$TransformReason');
    }
    static $isInstance(obj) {
        return obj instanceof EntityTransformEvent$TransformReason.$javaClass;
    }
    static get CURED() {
        return this.$javaClass.CURED;
    }
    static get DROWNED() {
        return this.$javaClass.DROWNED;
    }
    static get INFECTION() {
        return this.$javaClass.INFECTION;
    }
    static get LIGHTNING() {
        return this.$javaClass.LIGHTNING;
    }
    static get SHEARED() {
        return this.$javaClass.SHEARED;
    }
    static get SPLIT() {
        return this.$javaClass.SPLIT;
    }
    static get UNKNOWN() {
        return this.$javaClass.UNKNOWN;
    }
}
exports.default = EntityTransformEvent$TransformReason;
