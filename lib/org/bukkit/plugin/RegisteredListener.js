"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisteredListener {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.RegisteredListener');
    }
    static $isInstance(obj) {
        return obj instanceof RegisteredListener.$javaClass;
    }
    constructor(...args) {
        return new RegisteredListener.$javaClass(...args);
    }
}
exports.default = RegisteredListener;
