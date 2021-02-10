"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleCommandMap {
    static get $javaClass() {
        return Java.type('org.bukkit.command.SimpleCommandMap');
    }
    static $isInstance(obj) {
        return obj instanceof SimpleCommandMap.$javaClass;
    }
    constructor(...args) {
        return new SimpleCommandMap.$javaClass(...args);
    }
}
exports.default = SimpleCommandMap;
