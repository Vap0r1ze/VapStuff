"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandParameter {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandParameter');
    }
    static $isInstance(obj) {
        return obj instanceof CommandParameter.$javaClass;
    }
    constructor(...args) {
        return new CommandParameter.$javaClass(...args);
    }
}
exports.default = CommandParameter;
