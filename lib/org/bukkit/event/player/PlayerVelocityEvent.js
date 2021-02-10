"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerVelocityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerVelocityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerVelocityEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerVelocityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerVelocityEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerVelocityEvent;
