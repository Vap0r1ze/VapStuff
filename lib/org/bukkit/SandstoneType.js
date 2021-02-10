"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SandstoneType {
    static get $javaClass() {
        return Java.type('org.bukkit.SandstoneType');
    }
    static $isInstance(obj) {
        return obj instanceof SandstoneType.$javaClass;
    }
    static get CRACKED() {
        return this.$javaClass.CRACKED;
    }
    static get GLYPHED() {
        return this.$javaClass.GLYPHED;
    }
    static get SMOOTH() {
        return this.$javaClass.SMOOTH;
    }
}
exports.default = SandstoneType;
