"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandExecutor {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandExecutor');
    }
    static $isInstance(obj) {
        return obj instanceof CommandExecutor.$javaClass;
    }
}
exports.default = CommandExecutor;
