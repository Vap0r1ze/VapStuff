"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConditionContext {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.ConditionContext');
    }
    static $isInstance(obj) {
        return obj instanceof ConditionContext.$javaClass;
    }
}
exports.default = ConditionContext;
