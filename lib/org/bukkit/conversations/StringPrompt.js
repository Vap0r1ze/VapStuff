"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.StringPrompt');
    }
    static $isInstance(obj) {
        return obj instanceof StringPrompt.$javaClass;
    }
    constructor(...args) {
        return new StringPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return StringPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
exports.default = StringPrompt;
