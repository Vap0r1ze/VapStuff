"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DirectionalContainer {
    static get $javaClass() {
        return Java.type('org.bukkit.material.DirectionalContainer');
    }
    static $isInstance(obj) {
        return obj instanceof DirectionalContainer.$javaClass;
    }
    constructor(...args) {
        return new DirectionalContainer.$javaClass(...args);
    }
}
exports.default = DirectionalContainer;
