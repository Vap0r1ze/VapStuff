"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandException {
    static get $javaClass() {
        return Java.type('org.bukkit.command.CommandException');
    }
    static $isInstance(obj) {
        return obj instanceof CommandException.$javaClass;
    }
    constructor(...args) {
        return new CommandException.$javaClass(...args);
    }
}
exports.default = CommandException;
