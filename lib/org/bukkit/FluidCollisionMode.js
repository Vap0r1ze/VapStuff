"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FluidCollisionMode {
    static get $javaClass() {
        return Java.type('org.bukkit.FluidCollisionMode');
    }
    static $isInstance(obj) {
        return obj instanceof FluidCollisionMode.$javaClass;
    }
    static get ALWAYS() {
        return this.$javaClass.ALWAYS;
    }
    static get NEVER() {
        return this.$javaClass.NEVER;
    }
    static get SOURCE_ONLY() {
        return this.$javaClass.SOURCE_ONLY;
    }
}
exports.default = FluidCollisionMode;
