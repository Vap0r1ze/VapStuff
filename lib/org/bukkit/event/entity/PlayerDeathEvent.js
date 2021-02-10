"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerDeathEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerDeathEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerDeathEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerDeathEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerDeathEvent;
