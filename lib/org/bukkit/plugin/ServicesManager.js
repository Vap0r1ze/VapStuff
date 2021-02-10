"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicesManager {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.ServicesManager');
    }
    static $isInstance(obj) {
        return obj instanceof ServicesManager.$javaClass;
    }
}
exports.default = ServicesManager;
