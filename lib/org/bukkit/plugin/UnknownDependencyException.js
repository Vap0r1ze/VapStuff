"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnknownDependencyException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.UnknownDependencyException');
    }
    static $isInstance(obj) {
        return obj instanceof UnknownDependencyException.$javaClass;
    }
    constructor(...args) {
        return new UnknownDependencyException.$javaClass(...args);
    }
}
exports.default = UnknownDependencyException;
