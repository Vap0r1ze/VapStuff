"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionAttachment {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissionAttachment');
    }
    static $isInstance(obj) {
        return obj instanceof PermissionAttachment.$javaClass;
    }
    constructor(...args) {
        return new PermissionAttachment.$javaClass(...args);
    }
}
exports.default = PermissionAttachment;
