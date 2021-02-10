"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerToggleSprintEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerToggleSprintEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerToggleSprintEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerToggleSprintEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerToggleSprintEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerToggleSprintEvent;
