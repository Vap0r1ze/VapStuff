"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerFishEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerFishEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerFishEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerFishEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerFishEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerFishEvent;
