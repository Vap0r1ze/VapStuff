"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandExecutionContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandExecutionContext');
    }
    static $isInstance(obj) {
        return obj instanceof CommandExecutionContext.$javaClass;
    }
}
exports.default = CommandExecutionContext;
