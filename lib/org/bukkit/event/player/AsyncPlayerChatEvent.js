"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncPlayerChatEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.AsyncPlayerChatEvent');
    }
    static $isInstance(obj) {
        return obj instanceof AsyncPlayerChatEvent.$javaClass;
    }
    constructor(...args) {
        return new AsyncPlayerChatEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return AsyncPlayerChatEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = AsyncPlayerChatEvent;
