"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisteredCommand {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.RegisteredCommand');
    }
    static $isInstance(obj) {
        return obj instanceof RegisteredCommand.$javaClass;
    }
}
exports.default = RegisteredCommand;
