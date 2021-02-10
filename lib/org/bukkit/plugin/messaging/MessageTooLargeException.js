"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageTooLargeException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.messaging.MessageTooLargeException');
    }
    static $isInstance(obj) {
        return obj instanceof MessageTooLargeException.$javaClass;
    }
    constructor(...args) {
        return new MessageTooLargeException.$javaClass(...args);
    }
}
exports.default = MessageTooLargeException;
