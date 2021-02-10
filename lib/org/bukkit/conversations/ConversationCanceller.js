"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationCanceller');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationCanceller.$javaClass;
    }
}
exports.default = ConversationCanceller;
