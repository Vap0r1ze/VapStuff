"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerItemHeldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemHeldEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerItemHeldEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerItemHeldEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemHeldEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerItemHeldEvent;