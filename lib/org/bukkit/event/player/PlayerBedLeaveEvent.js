"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerBedLeaveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBedLeaveEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerBedLeaveEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerBedLeaveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBedLeaveEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerBedLeaveEvent;
