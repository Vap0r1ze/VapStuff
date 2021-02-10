"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DetectorRail {
    static get $javaClass() {
        return Java.type('org.bukkit.material.DetectorRail');
    }
    static $isInstance(obj) {
        return obj instanceof DetectorRail.$javaClass;
    }
    constructor(...args) {
        return new DetectorRail.$javaClass(...args);
    }
}
exports.default = DetectorRail;
