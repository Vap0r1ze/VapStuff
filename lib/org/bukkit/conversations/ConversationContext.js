"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConversationContext {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationContext');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationContext.$javaClass;
    }
    constructor(...args) {
        return new ConversationContext.$javaClass(...args);
    }
}
exports.default = ConversationContext;
