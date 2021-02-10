"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInteractAtEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerInteractAtEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerInteractAtEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerInteractAtEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerInteractAtEntityEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerInteractAtEntityEvent;
