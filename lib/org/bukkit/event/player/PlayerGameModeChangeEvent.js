export default class PlayerGameModeChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerGameModeChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerGameModeChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerGameModeChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerGameModeChangeEvent.$javaClass.getHandlerList(...args);
    }
}
