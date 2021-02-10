"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatMessageType {
    static get $javaClass() {
        return Java.type('net.md_5.bungee.api.ChatMessageType');
    }
    static $isInstance(obj) {
        return obj instanceof ChatMessageType.$javaClass;
    }
    static get ACTION_BAR() {
        return this.$javaClass.ACTION_BAR;
    }
    static get CHAT() {
        return this.$javaClass.CHAT;
    }
    static get SYSTEM() {
        return this.$javaClass.SYSTEM;
    }
}
exports.default = ChatMessageType;
