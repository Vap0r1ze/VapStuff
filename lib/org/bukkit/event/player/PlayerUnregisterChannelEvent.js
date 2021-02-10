"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerUnregisterChannelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerUnregisterChannelEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerUnregisterChannelEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerUnregisterChannelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerUnregisterChannelEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerUnregisterChannelEvent;
