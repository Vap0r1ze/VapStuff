"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrapDoor {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TrapDoor');
    }
    static $isInstance(obj) {
        return obj instanceof TrapDoor.$javaClass;
    }
    constructor(...args) {
        return new TrapDoor.$javaClass(...args);
    }
}
exports.default = TrapDoor;
