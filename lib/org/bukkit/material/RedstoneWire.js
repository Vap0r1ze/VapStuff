"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RedstoneWire {
    static get $javaClass() {
        return Java.type('org.bukkit.material.RedstoneWire');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneWire.$javaClass;
    }
    constructor(...args) {
        return new RedstoneWire.$javaClass(...args);
    }
}
exports.default = RedstoneWire;
