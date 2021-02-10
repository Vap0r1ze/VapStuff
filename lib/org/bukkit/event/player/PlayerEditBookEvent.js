"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerEditBookEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerEditBookEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerEditBookEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerEditBookEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerEditBookEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerEditBookEvent;
