"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandManager {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandManager');
    }
    static $isInstance(obj) {
        return obj instanceof CommandManager.$javaClass;
    }
    constructor(...args) {
        return new CommandManager.$javaClass(...args);
    }
    static getCurrentCommandIssuer(...args) {
        return CommandManager.$javaClass.getCurrentCommandIssuer(...args);
    }
    static getCurrentCommandManager(...args) {
        return CommandManager.$javaClass.getCurrentCommandManager(...args);
    }
    static getCurrentCommandOperationContext(...args) {
        return CommandManager.$javaClass.getCurrentCommandOperationContext(...args);
    }
}
exports.default = CommandManager;
