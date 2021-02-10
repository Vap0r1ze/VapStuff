"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerTeleportEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerTeleportEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerTeleportEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerTeleportEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerTeleportEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerTeleportEvent;
