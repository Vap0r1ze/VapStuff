"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandContexts {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandContexts');
    }
    static $isInstance(obj) {
        return obj instanceof CommandContexts.$javaClass;
    }
}
exports.default = CommandContexts;
