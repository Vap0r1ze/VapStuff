"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerPortalEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPortalEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerPortalEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerPortalEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPortalEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerPortalEvent;
