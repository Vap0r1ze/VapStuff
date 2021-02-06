export default class PlayerResourcePackStatusEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerResourcePackStatusEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerResourcePackStatusEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerResourcePackStatusEvent.$javaClass.getHandlerList(...args);
    }
}
