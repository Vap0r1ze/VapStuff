"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerRespawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRespawnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerRespawnEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerRespawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRespawnEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerRespawnEvent;
