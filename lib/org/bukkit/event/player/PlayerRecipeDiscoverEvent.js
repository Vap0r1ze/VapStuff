"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerRecipeDiscoverEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRecipeDiscoverEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerRecipeDiscoverEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerRecipeDiscoverEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRecipeDiscoverEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerRecipeDiscoverEvent;
