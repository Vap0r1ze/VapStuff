"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InactivityConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.InactivityConversationCanceller');
    }
    static $isInstance(obj) {
        return obj instanceof InactivityConversationCanceller.$javaClass;
    }
    constructor(...args) {
        return new InactivityConversationCanceller.$javaClass(...args);
    }
}
exports.default = InactivityConversationCanceller;
