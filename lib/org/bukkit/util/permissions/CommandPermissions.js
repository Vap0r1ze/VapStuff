"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandPermissions {
    static get $javaClass() {
        return Java.type('org.bukkit.util.permissions.CommandPermissions');
    }
    static $isInstance(obj) {
        return obj instanceof CommandPermissions.$javaClass;
    }
    static registerPermissions(...args) {
        return CommandPermissions.$javaClass.registerPermissions(...args);
    }
}
exports.default = CommandPermissions;
