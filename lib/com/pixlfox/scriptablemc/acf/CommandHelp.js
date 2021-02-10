"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandHelp {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandHelp');
    }
    static $isInstance(obj) {
        return obj instanceof CommandHelp.$javaClass;
    }
    constructor(...args) {
        return new CommandHelp.$javaClass(...args);
    }
}
exports.default = CommandHelp;
