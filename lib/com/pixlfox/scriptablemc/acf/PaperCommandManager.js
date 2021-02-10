"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaperCommandManager {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.PaperCommandManager');
    }
    static $isInstance(obj) {
        return obj instanceof PaperCommandManager.$javaClass;
    }
    constructor(...args) {
        return new PaperCommandManager.$javaClass(...args);
    }
    static getCurrentCommandIssuer(...args) {
        return PaperCommandManager.$javaClass.getCurrentCommandIssuer(...args);
    }
    static getCurrentCommandManager(...args) {
        return PaperCommandManager.$javaClass.getCurrentCommandManager(...args);
    }
    static getCurrentCommandOperationContext(...args) {
        return PaperCommandManager.$javaClass.getCurrentCommandOperationContext(...args);
    }
}
exports.default = PaperCommandManager;
