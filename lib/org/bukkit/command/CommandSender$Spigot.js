"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandSender$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandSender$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof CommandSender$Spigot.$javaClass;
    }
    constructor(...args) {
        return new CommandSender$Spigot.$javaClass(...args);
    }
}
exports.default = CommandSender$Spigot;
