"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConversationAbandonedListener {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationAbandonedListener');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationAbandonedListener.$javaClass;
    }
}
exports.default = ConversationAbandonedListener;
