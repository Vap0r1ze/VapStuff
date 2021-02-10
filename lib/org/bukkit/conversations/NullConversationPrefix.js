"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NullConversationPrefix {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.NullConversationPrefix');
    }
    static $isInstance(obj) {
        return obj instanceof NullConversationPrefix.$javaClass;
    }
    constructor(...args) {
        return new NullConversationPrefix.$javaClass(...args);
    }
}
exports.default = NullConversationPrefix;
