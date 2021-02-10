"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandCompletions {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandCompletions');
    }
    static $isInstance(obj) {
        return obj instanceof CommandCompletions.$javaClass;
    }
    constructor(...args) {
        return new CommandCompletions.$javaClass(...args);
    }
}
exports.default = CommandCompletions;
