"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PoweredRail {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PoweredRail');
    }
    static $isInstance(obj) {
        return obj instanceof PoweredRail.$javaClass;
    }
    constructor(...args) {
        return new PoweredRail.$javaClass(...args);
    }
}
exports.default = PoweredRail;
