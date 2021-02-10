"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManuallyAbandonedConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ManuallyAbandonedConversationCanceller');
    }
    static $isInstance(obj) {
        return obj instanceof ManuallyAbandonedConversationCanceller.$javaClass;
    }
    constructor(...args) {
        return new ManuallyAbandonedConversationCanceller.$javaClass(...args);
    }
}
exports.default = ManuallyAbandonedConversationCanceller;
