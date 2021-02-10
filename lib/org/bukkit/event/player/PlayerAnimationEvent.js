"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerAnimationEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerAnimationEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerAnimationEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerAnimationEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerAnimationEvent;
