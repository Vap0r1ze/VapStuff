"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.ConsoleCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof ConsoleCommandSender.$javaClass;
    }
}
exports.default = ConsoleCommandSender;
