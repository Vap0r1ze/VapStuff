"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wood {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Wood');
    }
    static $isInstance(obj) {
        return obj instanceof Wood.$javaClass;
    }
    constructor(...args) {
        return new Wood.$javaClass(...args);
    }
}
exports.default = Wood;
