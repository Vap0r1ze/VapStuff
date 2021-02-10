"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryConfiguration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.MemoryConfiguration');
    }
    static $isInstance(obj) {
        return obj instanceof MemoryConfiguration.$javaClass;
    }
    constructor(...args) {
        return new MemoryConfiguration.$javaClass(...args);
    }
    static createPath(...args) {
        return MemoryConfiguration.$javaClass.createPath(...args);
    }
}
exports.default = MemoryConfiguration;
