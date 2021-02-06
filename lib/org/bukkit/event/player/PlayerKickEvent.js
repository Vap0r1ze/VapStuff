export default class PlayerKickEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerKickEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerKickEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerKickEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerKickEvent.$javaClass.getHandlerList(...args);
    }
}
