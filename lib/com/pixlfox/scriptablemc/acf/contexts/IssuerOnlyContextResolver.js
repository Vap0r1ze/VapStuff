"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IssuerOnlyContextResolver {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.acf.contexts.IssuerOnlyContextResolver');
    }
    static $isInstance(obj) {
        return obj instanceof IssuerOnlyContextResolver.$javaClass;
    }
}
exports.default = IssuerOnlyContextResolver;
