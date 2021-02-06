export default class PlayerToggleFlightEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerToggleFlightEvent');
    }
    static $isInstance(obj) {
        return obj instanceof PlayerToggleFlightEvent.$javaClass;
    }
    constructor(...args) {
        return new PlayerToggleFlightEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerToggleFlightEvent.$javaClass.getHandlerList(...args);
    }
}
