"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandCompletionContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandCompletionContext');
    }
    static $isInstance(obj) {
        return obj instanceof CommandCompletionContext.$javaClass;
    }
}
exports.default = CommandCompletionContext;
