"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StructureRotation {
    static get $javaClass() {
        return Java.type('org.bukkit.block.structure.StructureRotation');
    }
    static $isInstance(obj) {
        return obj instanceof StructureRotation.$javaClass;
    }
    static get CLOCKWISE_180() {
        return this.$javaClass.CLOCKWISE_180;
    }
    static get CLOCKWISE_90() {
        return this.$javaClass.CLOCKWISE_90;
    }
    static get COUNTERCLOCKWISE_90() {
        return this.$javaClass.COUNTERCLOCKWISE_90;
    }
    static get NONE() {
        return this.$javaClass.NONE;
    }
}
exports.default = StructureRotation;
