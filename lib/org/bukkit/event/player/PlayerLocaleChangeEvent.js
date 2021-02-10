"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerLocaleChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLocaleChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerLocaleChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerLocaleChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLocaleChangeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerLocaleChangeEvent;
