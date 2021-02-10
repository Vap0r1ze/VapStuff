"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReloadCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.ReloadCommand');
    }
    static $isInstance(obj) {
        return obj instanceof ReloadCommand.$javaClass;
    }
    constructor(...args) {
        return new ReloadCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return ReloadCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = ReloadCommand;
