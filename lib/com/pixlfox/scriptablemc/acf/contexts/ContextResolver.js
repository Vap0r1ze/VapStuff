"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContextResolver {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.contexts.ContextResolver');
    }
    static $isInstance(obj) {
        return obj instanceof ContextResolver.$javaClass;
    }
}
exports.default = ContextResolver;
