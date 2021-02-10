"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conversation$ConversationState {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Conversation$ConversationState');
    }
    static $isInstance(obj) {
        return obj instanceof Conversation$ConversationState.$javaClass;
    }
    static get ABANDONED() {
        return this.$javaClass.ABANDONED;
    }
    static get STARTED() {
        return this.$javaClass.STARTED;
    }
    static get UNSTARTED() {
        return this.$javaClass.UNSTARTED;
    }
}
exports.default = Conversation$ConversationState;
