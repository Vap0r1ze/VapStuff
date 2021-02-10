"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Command');
    }
    static $isInstance(obj) {
        return obj instanceof Command.$javaClass;
    }
    constructor(...args) {
        return new Command.$javaClass(...args);
    }
}
exports.default = Command;
