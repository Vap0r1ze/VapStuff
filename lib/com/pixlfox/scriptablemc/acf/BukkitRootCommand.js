"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitRootCommand {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BukkitRootCommand');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitRootCommand.$javaClass;
    }
    static broadcastCommandMessage(...args) {
        return BukkitRootCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = BukkitRootCommand;
