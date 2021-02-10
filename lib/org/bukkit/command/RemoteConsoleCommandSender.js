"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteConsoleCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.RemoteConsoleCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof RemoteConsoleCommandSender.$javaClass;
    }
}
exports.default = RemoteConsoleCommandSender;
