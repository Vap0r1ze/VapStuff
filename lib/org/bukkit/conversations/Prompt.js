"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Prompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.Prompt');
    }
    static $isInstance(obj) {
        return obj instanceof Prompt.$javaClass;
    }
    static get END_OF_CONVERSATION() {
        return Prompt.$javaClass.END_OF_CONVERSATION;
    }
}
exports.default = Prompt;
