"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerBucketEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBucketEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerBucketEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerBucketEvent.$javaClass(...args);
    }
}
exports.default = PlayerBucketEvent;
