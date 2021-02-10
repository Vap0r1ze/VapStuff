"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerNamePrompt {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.PlayerNamePrompt');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerNamePrompt.$javaClass;
    }
    constructor(...args) {
        return new PlayerNamePrompt.$javaClass(...args);
    }
    static get END_OF_CONVERSATION() {
        return PlayerNamePrompt.$javaClass.END_OF_CONVERSATION;
    }
}
exports.default = PlayerNamePrompt;
