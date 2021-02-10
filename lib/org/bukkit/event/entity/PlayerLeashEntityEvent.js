"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerLeashEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PlayerLeashEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerLeashEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerLeashEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLeashEntityEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerLeashEntityEvent;
