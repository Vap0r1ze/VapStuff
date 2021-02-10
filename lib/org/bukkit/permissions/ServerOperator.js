"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerOperator {
    static get $javaClass() {
        return Java.type('org.bukkit.permissions.ServerOperator');
    }
    static $isInstance(obj) {
        return obj instanceof ServerOperator.$javaClass;
    }
}
exports.default = ServerOperator;
