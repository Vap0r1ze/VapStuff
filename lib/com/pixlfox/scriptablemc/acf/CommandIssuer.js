"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandIssuer {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandIssuer');
    }
    static $isInstance(obj) {
        return obj instanceof CommandIssuer.$javaClass;
    }
}
exports.default = CommandIssuer;
