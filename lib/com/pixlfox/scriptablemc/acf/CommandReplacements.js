"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandReplacements {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.CommandReplacements');
    }
    static $isInstance(obj) {
        return obj instanceof CommandReplacements.$javaClass;
    }
}
exports.default = CommandReplacements;
