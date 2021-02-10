"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OptionalContextResolver {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.contexts.OptionalContextResolver');
    }
    static $isInstance(obj) {
        return obj instanceof OptionalContextResolver.$javaClass;
    }
}
exports.default = OptionalContextResolver;
