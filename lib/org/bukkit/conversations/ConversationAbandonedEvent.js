"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConversationAbandonedEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationAbandonedEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationAbandonedEvent.$javaClass;
    }
    constructor(...args) {
        return new ConversationAbandonedEvent.$javaClass(...args);
    }
}
exports.default = ConversationAbandonedEvent;
