"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerChatTabCompleteEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChatTabCompleteEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerChatTabCompleteEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerChatTabCompleteEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChatTabCompleteEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerChatTabCompleteEvent;
