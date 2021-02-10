"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerDropItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerDropItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerDropItemEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerDropItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerDropItemEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerDropItemEvent;
