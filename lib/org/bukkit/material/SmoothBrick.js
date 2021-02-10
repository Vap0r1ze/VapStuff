"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmoothBrick {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SmoothBrick');
    }
    static $isInstance(obj) {
        return obj instanceof SmoothBrick.$javaClass;
    }
    constructor(...args) {
        return new SmoothBrick.$javaClass(...args);
    }
}
exports.default = SmoothBrick;
