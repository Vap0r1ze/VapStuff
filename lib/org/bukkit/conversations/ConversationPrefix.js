"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConversationPrefix {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationPrefix');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationPrefix.$javaClass;
    }
}
exports.default = ConversationPrefix;
