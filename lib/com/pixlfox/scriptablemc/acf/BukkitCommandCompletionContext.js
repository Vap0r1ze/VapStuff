"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitCommandCompletionContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BukkitCommandCompletionContext');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitCommandCompletionContext.$javaClass;
    }
}
exports.default = BukkitCommandCompletionContext;
