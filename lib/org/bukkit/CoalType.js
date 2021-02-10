"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoalType {
    static get $javaClass() {
        return Java.type('org.bukkit.CoalType');
    }
    static $isInstance(obj) {
        return obj instanceof CoalType.$javaClass;
    }
    static get CHARCOAL() {
        return this.$javaClass.CHARCOAL;
    }
    static get COAL() {
        return this.$javaClass.COAL;
    }
}
exports.default = CoalType;
