"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerArmorStandManipulateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerArmorStandManipulateEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerArmorStandManipulateEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerArmorStandManipulateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerArmorStandManipulateEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerArmorStandManipulateEvent;
