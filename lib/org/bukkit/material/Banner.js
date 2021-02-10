"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banner {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Banner');
    }
    static $isInstance(obj) {
        return obj instanceof Banner.$javaClass;
    }
    constructor(...args) {
        return new Banner.$javaClass(...args);
    }
}
exports.default = Banner;
