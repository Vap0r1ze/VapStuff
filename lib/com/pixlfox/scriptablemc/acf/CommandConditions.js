"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandConditions {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandConditions');
    }
    static $isInstance(obj) {
        return obj instanceof CommandConditions.$javaClass;
    }
}
exports.default = CommandConditions;
