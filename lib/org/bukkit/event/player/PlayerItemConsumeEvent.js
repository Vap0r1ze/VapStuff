"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerItemConsumeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemConsumeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerItemConsumeEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerItemConsumeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemConsumeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerItemConsumeEvent;
