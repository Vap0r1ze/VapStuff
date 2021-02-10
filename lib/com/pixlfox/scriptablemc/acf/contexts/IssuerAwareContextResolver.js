"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IssuerAwareContextResolver {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.contexts.IssuerAwareContextResolver');
    }
    static $isInstance(obj) {
        return obj instanceof IssuerAwareContextResolver.$javaClass;
    }
}
exports.default = IssuerAwareContextResolver;
