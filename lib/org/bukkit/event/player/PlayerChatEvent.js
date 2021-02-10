"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerChatEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChatEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerChatEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerChatEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChatEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerChatEvent;
