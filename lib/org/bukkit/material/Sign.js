"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sign {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sign');
    }
    static $isInstance(obj) {
        return obj instanceof Sign.$javaClass;
    }
    constructor(...args) {
        return new Sign.$javaClass(...args);
    }
}
exports.default = Sign;
