"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandOperationContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandOperationContext');
    }
    static $isInstance(obj) {
        return obj instanceof CommandOperationContext.$javaClass;
    }
}
exports.default = CommandOperationContext;
