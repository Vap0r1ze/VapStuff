"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerEggThrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerEggThrowEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerEggThrowEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerEggThrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerEggThrowEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerEggThrowEvent;
