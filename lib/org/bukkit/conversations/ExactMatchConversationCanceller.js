"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExactMatchConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ExactMatchConversationCanceller');
    }
    static $isInstance(obj) {
        return obj instanceof ExactMatchConversationCanceller.$javaClass;
    }
    constructor(...args) {
        return new ExactMatchConversationCanceller.$javaClass(...args);
    }
}
exports.default = ExactMatchConversationCanceller;
