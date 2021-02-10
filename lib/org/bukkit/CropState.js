"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CropState {
    static get $javaClass() {
        return Java.type('org.bukkit.CropState');
    }
    static $isInstance(obj) {
        return obj instanceof CropState.$javaClass;
    }
    static get GERMINATED() {
        return this.$javaClass.GERMINATED;
    }
    static get MEDIUM() {
        return this.$javaClass.MEDIUM;
    }
    static get RIPE() {
        return this.$javaClass.RIPE;
    }
    static get SEEDED() {
        return this.$javaClass.SEEDED;
    }
    static get SMALL() {
        return this.$javaClass.SMALL;
    }
    static get TALL() {
        return this.$javaClass.TALL;
    }
    static get VERY_SMALL() {
        return this.$javaClass.VERY_SMALL;
    }
    static get VERY_TALL() {
        return this.$javaClass.VERY_TALL;
    }
}
exports.default = CropState;
