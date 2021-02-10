"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerRegisterChannelEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRegisterChannelEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerRegisterChannelEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerRegisterChannelEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRegisterChannelEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerRegisterChannelEvent;
