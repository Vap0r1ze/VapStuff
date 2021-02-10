"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultipleCommandAlias {
    static get $javaClass() {
        return Java.type('org.bukkit.command.MultipleCommandAlias');
    }
    static $isInstance(obj) {
        return obj instanceof MultipleCommandAlias.$javaClass;
    }
    constructor(...args) {
        return new MultipleCommandAlias.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return MultipleCommandAlias.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = MultipleCommandAlias;
