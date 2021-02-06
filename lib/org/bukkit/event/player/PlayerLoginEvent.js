export default class PlayerLoginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLoginEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerLoginEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerLoginEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLoginEvent.$javaClass.getHandlerList(...args);
    }
}
