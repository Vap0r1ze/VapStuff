"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandMap {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandMap');
    }
    static $isInstance(obj) {
        return obj instanceof CommandMap.$javaClass;
    }
}
exports.default = CommandMap;
