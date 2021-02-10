"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.HelpCommand');
    }
    static $isInstance(obj) {
        return obj instanceof HelpCommand.$javaClass;
    }
    constructor(...args) {
        return new HelpCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return HelpCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = HelpCommand;
