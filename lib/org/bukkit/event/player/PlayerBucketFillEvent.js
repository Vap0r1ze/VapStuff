"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerBucketFillEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBucketFillEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerBucketFillEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerBucketFillEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBucketFillEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = PlayerBucketFillEvent;
