"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RedstoneTorch {
    static get $javaClass() {
        return Java.type('org.bukkit.material.RedstoneTorch');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneTorch.$javaClass;
    }
    constructor(...args) {
        return new RedstoneTorch.$javaClass(...args);
    }
}
exports.default = RedstoneTorch;
