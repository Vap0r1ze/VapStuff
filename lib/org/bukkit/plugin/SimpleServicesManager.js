"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleServicesManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.SimpleServicesManager');
    }
    static $isInstance(obj) {
        return obj instanceof SimpleServicesManager.$javaClass;
    }
    constructor(...args) {
        return new SimpleServicesManager.$javaClass(...args);
    }
}
exports.default = SimpleServicesManager;
