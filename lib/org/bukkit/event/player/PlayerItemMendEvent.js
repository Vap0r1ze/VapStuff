"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerItemMendEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemMendEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerItemMendEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerItemMendEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemMendEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerItemMendEvent;
