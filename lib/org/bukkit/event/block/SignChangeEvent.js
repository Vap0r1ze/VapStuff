"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.SignChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof SignChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new SignChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SignChangeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = SignChangeEvent;
