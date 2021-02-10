"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpectralArrow {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.SpectralArrow');
    }
    static $isInstance(obj) {
        return obj instanceof SpectralArrow.$javaClass;
    }
}
exports.default = SpectralArrow;
