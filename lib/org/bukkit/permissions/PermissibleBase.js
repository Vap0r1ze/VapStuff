"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PermissibleBase {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.PermissibleBase');
    }
    static $isInstance(obj) {
        return obj instanceof PermissibleBase.$javaClass;
    }
    constructor(...args) {
        return new PermissibleBase.$javaClass(...args);
    }
}
exports.default = PermissibleBase;
