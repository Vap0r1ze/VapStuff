"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerAdvancementDoneEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAdvancementDoneEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerAdvancementDoneEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerAdvancementDoneEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerAdvancementDoneEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerAdvancementDoneEvent;
