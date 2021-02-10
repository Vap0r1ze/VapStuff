"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerQuitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerQuitEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerQuitEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerQuitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerQuitEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerQuitEvent;
