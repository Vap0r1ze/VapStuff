"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitCommandManager {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandManager');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitCommandManager.$javaClass;
    }
    constructor(...args) {
        return new BukkitCommandManager.$javaClass(...args);
    }
    static getCurrentCommandIssuer(...args) {
        return BukkitCommandManager.$javaClass.getCurrentCommandIssuer(...args);
    }
    static getCurrentCommandManager(...args) {
        return BukkitCommandManager.$javaClass.getCurrentCommandManager(...args);
    }
    static getCurrentCommandOperationContext(...args) {
        return BukkitCommandManager.$javaClass.getCurrentCommandOperationContext(...args);
    }
}
exports.default = BukkitCommandManager;
