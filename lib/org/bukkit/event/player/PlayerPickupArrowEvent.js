"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerPickupArrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPickupArrowEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerPickupArrowEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerPickupArrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPickupArrowEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerPickupArrowEvent;
