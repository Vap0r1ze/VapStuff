"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DelegateDeserialization {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.serialization.DelegateDeserialization');
    }
    static $isInstance(obj) {
        return obj instanceof DelegateDeserialization.$javaClass;
    }
}
exports.default = DelegateDeserialization;
