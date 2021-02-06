export default class PlayerMoveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerMoveEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerMoveEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerMoveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerMoveEvent.$javaClass.getHandlerList(...args);
    }
}
