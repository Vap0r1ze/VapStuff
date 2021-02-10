"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VersionCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.VersionCommand');
    }
    static $isInstance(obj) {
        return obj instanceof VersionCommand.$javaClass;
    }
    constructor(...args) {
        return new VersionCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return VersionCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = VersionCommand;
