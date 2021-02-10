"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consumer {
    static get $javaClass() {
        return Java.type('org.bukkit.util.Consumer');
    }
    static $isInstance(obj) {
        return obj instanceof Consumer.$javaClass;
    }
}
exports.default = Consumer;
