"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandHelpFormatter {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandHelpFormatter');
    }
    static $isInstance(obj) {
        return obj instanceof CommandHelpFormatter.$javaClass;
    }
    constructor(...args) {
        return new CommandHelpFormatter.$javaClass(...args);
    }
}
exports.default = CommandHelpFormatter;
