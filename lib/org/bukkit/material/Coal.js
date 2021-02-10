"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coal {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Coal');
    }
    static $isInstance(obj) {
        return obj instanceof Coal.$javaClass;
    }
    constructor(...args) {
        return new Coal.$javaClass(...args);
    }
}
exports.default = Coal;
