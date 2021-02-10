"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatingPrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ValidatingPrompt');
    }
    static $isInstance(obj) {
        return obj instanceof ValidatingPrompt.$javaClass;
    }
    constructor(...args) {
        return new ValidatingPrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return ValidatingPrompt.$javaClass.END_OF_CONVERSATION;
    }
}
exports.default = ValidatingPrompt;
