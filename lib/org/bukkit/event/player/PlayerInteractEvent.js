"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInteractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerInteractEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerInteractEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerInteractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerInteractEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerInteractEvent;
