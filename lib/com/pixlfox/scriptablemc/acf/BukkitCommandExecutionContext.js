"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitCommandExecutionContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandExecutionContext');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitCommandExecutionContext.$javaClass;
    }
}
exports.default = BukkitCommandExecutionContext;
