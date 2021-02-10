"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PortalType {
    static get $javaClass() {
        return Java.type('org.bukkit.PortalType');
    }
    static $isInstance(obj) {
        return obj instanceof PortalType.$javaClass;
    }
    static get CUSTOM() {
        return this.$javaClass.CUSTOM;
    }
    static get ENDER() {
        return this.$javaClass.ENDER;
    }
    static get NETHER() {
        return this.$javaClass.NETHER;
    }
}
exports.default = PortalType;
