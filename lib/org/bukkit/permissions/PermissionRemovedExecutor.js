"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionRemovedExecutor {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissionRemovedExecutor');
    }
    static $isInstance(obj) {
        return obj instanceof PermissionRemovedExecutor.$javaClass;
    }
}
exports.default = PermissionRemovedExecutor;
