"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessagePrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.MessagePrompt');
    }
    static $isInstance(obj) {
        return obj instanceof MessagePrompt.$javaClass;
    }
    constructor(...args) {
        return new MessagePrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return MessagePrompt.$javaClass.END_OF_CONVERSATION;
    }
}
exports.default = MessagePrompt;
