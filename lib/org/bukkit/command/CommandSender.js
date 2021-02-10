"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof CommandSender.$javaClass;
    }
}
exports.default = CommandSender;
