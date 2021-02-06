export default class PlayerBucketEvent {
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
