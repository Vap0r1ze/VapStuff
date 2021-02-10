"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitConditionContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.BukkitConditionContext');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitConditionContext.$javaClass;
    }
}
exports.default = BukkitConditionContext;
