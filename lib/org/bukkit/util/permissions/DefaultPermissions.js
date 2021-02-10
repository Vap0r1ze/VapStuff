"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultPermissions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.permissions.DefaultPermissions');
    }
    static $isInstance(obj) {
        return obj instanceof DefaultPermissions.$javaClass;
    }
    static registerCorePermissions(...args) {
        return DefaultPermissions.$javaClass.registerCorePermissions(...args);
    }
    static registerPermission(...args) {
        return DefaultPermissions.$javaClass.registerPermission(...args);
    }
}
exports.default = DefaultPermissions;
