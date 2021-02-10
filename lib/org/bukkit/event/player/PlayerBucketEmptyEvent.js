"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerBucketEmptyEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBucketEmptyEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerBucketEmptyEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerBucketEmptyEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBucketEmptyEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerBucketEmptyEvent;
