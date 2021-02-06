export default class PlayerBucketFillEvent {
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
