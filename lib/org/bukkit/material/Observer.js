"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Observer');
    }
    static $isInstance(obj) {
        return obj instanceof Observer.$javaClass;
    }
    constructor(...args) {
        return new Observer.$javaClass(...args);
    }
}
exports.default = Observer;
