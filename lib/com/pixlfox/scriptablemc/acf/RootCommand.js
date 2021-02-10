"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootCommand {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.RootCommand');
    }
    static $isInstance(obj) {
        return obj instanceof RootCommand.$javaClass;
    }
}
exports.default = RootCommand;
