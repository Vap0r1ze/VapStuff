"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisteredServiceProvider {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.RegisteredServiceProvider');
    }
    static $isInstance(obj) {
        return obj instanceof RegisteredServiceProvider.$javaClass;
    }
    constructor(...args) {
        return new RegisteredServiceProvider.$javaClass(...args);
    }
}
exports.default = RegisteredServiceProvider;
