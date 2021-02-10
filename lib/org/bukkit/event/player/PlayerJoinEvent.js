"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerJoinEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerJoinEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerJoinEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerJoinEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerJoinEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerJoinEvent;
