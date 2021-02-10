"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerStatisticIncrementEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerStatisticIncrementEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerStatisticIncrementEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerStatisticIncrementEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerStatisticIncrementEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerStatisticIncrementEvent;
