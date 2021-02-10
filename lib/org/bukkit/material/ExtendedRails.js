"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExtendedRails {
    static get $javaClass() {
        return Java.type('org.bukkit.material.ExtendedRails');
    }
    static $isInstance(obj) {
        return obj instanceof ExtendedRails.$javaClass;
    }
    constructor(...args) {
        return new ExtendedRails.$javaClass(...args);
    }
}
exports.default = ExtendedRails;
