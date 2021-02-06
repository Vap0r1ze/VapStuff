export default class PlayerPreLoginEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPreLoginEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerPreLoginEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerPreLoginEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPreLoginEvent.$javaClass.getHandlerList(...args);
    }
}
