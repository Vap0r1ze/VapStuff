"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissionAttachmentInfo {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissionAttachmentInfo');
    }
    static $isInstance(obj) {
        return obj instanceof PermissionAttachmentInfo.$javaClass;
    }
    constructor(...args) {
        return new PermissionAttachmentInfo.$javaClass(...args);
    }
}
exports.default = PermissionAttachmentInfo;
