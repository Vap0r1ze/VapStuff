"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorldType {
    static get $javaClass() {
        return Java.type('org.bukkit.WorldType');
    }
    static $isInstance(obj) {
        return obj instanceof WorldType.$javaClass;
    }
    static get AMPLIFIED() {
        return this.$javaClass.AMPLIFIED;
    }
    static get FLAT() {
        return this.$javaClass.FLAT;
    }
    static get LARGE_BIOMES() {
        return this.$javaClass.LARGE_BIOMES;
    }
    static get NORMAL() {
        return this.$javaClass.NORMAL;
    }
}
exports.default = WorldType;
