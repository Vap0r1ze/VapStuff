"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerItemDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemDamageEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerItemDamageEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerItemDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemDamageEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerItemDamageEvent;
